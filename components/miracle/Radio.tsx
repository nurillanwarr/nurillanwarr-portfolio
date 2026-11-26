"use client"

import React from "react"
import { cn } from "@/lib/utils"
import type { InputHTMLAttributes, ReactNode } from "react"

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  description?: ReactNode
  iconStart?: ReactNode
  children?: ReactNode
  invers?: boolean
}

export default function MiracleRadio({
  children,
  description,
  iconStart,
  className,
  disabled,
  onChange,
  invers = false,
  ...props
}: RadioProps) {
  return (
    <label
      className={cn(
        "grid cursor-pointer grid-cols-[auto_auto_1fr] items-center gap-x-2.5 gap-y-1 rounded-md px-2.5 py-1.5 transition-colors duration-200 select-none",
        "hover:bg-[#EAE4DC] dark:hover:bg-[#2C2B28]",
        disabled ? "pointer-events-none opacity-50" : "",
        className
      )}
    >
      <input
        type="radio"
        className={cn(
          "h-4 w-4 cursor-pointer transition-transform duration-200",
          invers
            ? "accent-[#8C5E38] dark:accent-[#8C5E38]"
            : "accent-[#8C5E38] dark:accent-[#8C5E38]"
        )}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />

      {iconStart && <span className="flex shrink-0">{iconStart}</span>}

      <span className="text-xs font-mono font-medium text-[#1C1C1A] dark:text-[#FAF6F0] select-none">
        {children}
      </span>

      {description && (
        <span className="col-span-2 col-start-2 text-[11px] text-[#736E65] dark:text-zinc-400">
          {description}
        </span>
      )}
    </label>
  )
}
