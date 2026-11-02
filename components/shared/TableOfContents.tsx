"use client"

import React, { useEffect, useState } from "react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  title?: string
  className?: string
}

/**
 * Komponen TableOfContents
 * Menampilkan daftar isi navigasi halaman (ON THIS PAGE) dengan scroll-spy aktif,
 * diselaraskan dengan palet kertas vellum portofolio (#EBE3D7, #8C5E38, #1C1C1A):
 * - Memindai elemen h2[id] dan h3[id] di dalam artikel
 * - Menggunakan IntersectionObserver untuk menandai bagian yang sedang aktif dibaca
 * - Memberi highlight warna tembaga arsitektural (#8C5E38) pada bagian aktif
 * - Pengguliran halus (smooth scroll) saat tautan diklik dengan penyesuaian offset navbar
 */
export const TableOfContents: React.FC<TableOfContentsProps> = ({
  title = "ON THIS PAGE",
  className = "",
}) => {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const scanHeadings = () => {
      const articleEl = document.querySelector("article") || document
      const elements = Array.from(
        articleEl.querySelectorAll("h2[id], h3[id]")
      ).map((elem) => ({
        id: elem.id,
        text: (elem as HTMLElement).innerText || "",
        level: Number(elem.tagName.substring(1)),
      }))
      setHeadings(elements)
      return elements
    }

    const currentHeadings = scanHeadings()
    let observer: IntersectionObserver

    const observeHeadings = (items: TOCItem[]) => {
      if (observer) observer.disconnect()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: "0% 0% -60% 0%", threshold: 0.5 }
      )

      items.forEach((h) => {
        const el = document.getElementById(h.id)
        if (el) observer.observe(el)
      })
    }

    observeHeadings(currentHeadings)

    const mutationObserver = new MutationObserver(() => {
      const newItems = scanHeadings()
      observeHeadings(newItems)
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => {
      if (observer) observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  if (headings.length === 0) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -96, duration: 1.2 })
      } else {
        const offset = 96
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        })
      }
      setActiveId(id)
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className={`sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 ${className}`}
    >
      <div className="border-b border-[#1C1C1A]/15 pb-2.5 font-mono text-[11px] font-bold tracking-[0.2em] text-[#8C5E38] uppercase">
        {title}
      </div>

      <ul className="mt-4 space-y-1.5 border-l border-[#1C1C1A]/15 font-sans text-xs">
        {headings.map((item) => {
          const isActive = activeId === item.id
          return (
            <li
              key={item.id}
              className={`${
                item.level === 3 ? "pl-5 text-[11.5px]" : "font-medium"
              }`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block py-1 transition-all duration-200 ${
                  isActive
                    ? "font-semibold text-[#8C5E38] border-l-2 border-[#8C5E38] pl-3 -ml-[1px]"
                    : "text-[#736E65] hover:text-[#1C1C1A] border-l-2 border-transparent pl-3 -ml-[1px]"
                }`}
              >
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TableOfContents
