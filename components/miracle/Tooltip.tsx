"use client"

import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

export type TooltipDefaultPosition =
  | "top-start"
  | "top-center"
  | "top-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end"
  | "left-start"
  | "left-center"
  | "left-end"
  | "right-start"
  | "right-center"
  | "right-end"

export type TooltipProps = {
  className?: string
  trigger: ReactNode
  children: ReactNode
  defaultPosition?: TooltipDefaultPosition
  hoverContent?: boolean
  noPadding?: boolean
  noBackground?: boolean
  noShadow?: boolean
  noArrow?: boolean
}

export default function MiracleTooltip({
  className,
  trigger,
  children,
  defaultPosition = "bottom-center",
  hoverContent = true,
  noPadding = false,
  noBackground = false,
  noShadow = false,
  noArrow = false,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const [adaptedPos, setAdaptedPos] = useState<TooltipDefaultPosition>(defaultPosition)
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen)
    if (isOpen) {
      setIsRendered(true)
    } else {
      setAnimate(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      const frameId = requestAnimationFrame(() => {
        setAnimate(true)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsRendered(false)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const updatePosition = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return

    const triggerRect = containerRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    if (
      triggerRect.bottom < 0 ||
      triggerRect.top > viewportHeight ||
      triggerRect.right < 0 ||
      triggerRect.left > viewportWidth
    ) {
      handleClose()
      return
    }

    const contentRect = contentRef.current.getBoundingClientRect()
    const gap = 8
    let [side, align] = defaultPosition.split("-")

    if (side === "top" && triggerRect.top - contentRect.height - gap < 0) side = "bottom"
    else if (side === "bottom" && triggerRect.bottom + contentRect.height + gap > viewportHeight)
      side = "top"

    if (side === "top" || side === "bottom") {
      const centerX = triggerRect.left + triggerRect.width / 2
      if (centerX - contentRect.width / 2 < 0) align = "start"
      else if (centerX + contentRect.width / 2 > viewportWidth) align = "end"
    }

    let top = 0
    let left = 0

    if (side === "top") top = triggerRect.top - contentRect.height - gap
    else if (side === "bottom") top = triggerRect.bottom + gap
    else {
      if (align === "start") top = triggerRect.top
      else if (align === "end") top = triggerRect.bottom - contentRect.height
      else top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2
    }

    if (side === "left") left = triggerRect.left - contentRect.width - gap
    else if (side === "right") left = triggerRect.right + gap
    else {
      if (align === "start") left = triggerRect.left
      else if (align === "end") left = triggerRect.right - contentRect.width
      else left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
    }

    left = Math.max(gap, Math.min(left, viewportWidth - contentRect.width - gap))
    top = Math.max(gap, Math.min(top, viewportHeight - contentRect.height - gap))

    setCoords({ top, left })
    setAdaptedPos(`${side}-${align}` as TooltipDefaultPosition)
  }, [defaultPosition, handleClose])

  useLayoutEffect(() => {
    if (isRendered) {
      updatePosition()

      const resizeObserver = new ResizeObserver(() => updatePosition())
      if (contentRef.current) resizeObserver.observe(contentRef.current)

      window.addEventListener("scroll", updatePosition, true)
      window.addEventListener("resize", updatePosition)

      return () => {
        resizeObserver.disconnect()
        window.removeEventListener("scroll", updatePosition, true)
        window.removeEventListener("resize", updatePosition)
      }
    }
  }, [isRendered, updatePosition])

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        contentRef.current &&
        !contentRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200)
  }

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  const arrowPositionClass: Record<string, string> = {
    "top-start": "-bottom-[5px] left-4",
    "top-center": "-bottom-[5px] left-1/2 -translate-x-1/2",
    "top-end": "-bottom-[5px] right-4",
    "bottom-start": "-top-[5px] left-4",
    "bottom-center": "-top-[5px] left-1/2 -translate-x-1/2",
    "bottom-end": "-top-[5px] right-4",
  }

  return (
    <>
      <div
        ref={containerRef}
        className={cn("group/tooltip relative inline-flex cursor-pointer", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTriggerClick}
      >
        {trigger}
      </div>

      {mounted &&
        isRendered &&
        createPortal(
          <div
            ref={contentRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              transform: `translate3d(${coords.left}px, ${coords.top}px, 0)`,
              pointerEvents: isOpen ? "auto" : "none",
            }}
            className={cn(
              "z-[9999] transition-all duration-200 ease-out",
              animate ? "visible opacity-100 scale-100" : "pointer-events-none invisible opacity-0 scale-95"
            )}
            onMouseEnter={hoverContent ? handleMouseEnter : undefined}
            onMouseLeave={hoverContent ? handleMouseLeave : undefined}
          >
            <div
              className={cn(
                "relative rounded-xl border border-[#D5CBB9] bg-[#FAF6F0] text-[#1C1C1A] dark:border-[#353532] dark:bg-[#22211F] dark:text-[#FAF6F0]",
                !noShadow && "shadow-xl shadow-black/10 dark:shadow-black/40",
                !noPadding && "p-2.5",
                "min-w-[150px]"
              )}
            >
              {!noArrow && (
                <div
                  className={cn(
                    "absolute z-0 h-2.5 w-2.5 rotate-45 border-t border-l border-[#D5CBB9] bg-[#FAF6F0] dark:border-[#353532] dark:bg-[#22211F]",
                    arrowPositionClass[adaptedPos] || arrowPositionClass["bottom-center"]
                  )}
                />
              )}
              <div className="relative z-10">{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
