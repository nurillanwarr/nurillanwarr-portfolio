import React, { ComponentPropsWithoutRef } from "react"
import Link from "next/link"

export type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

type HeadingProps = ComponentPropsWithoutRef<"h1">
type ParagraphProps = ComponentPropsWithoutRef<"p">
type UlProps = ComponentPropsWithoutRef<"ul">
type OlProps = ComponentPropsWithoutRef<"ol">
type LiProps = ComponentPropsWithoutRef<"li">
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">
type CodeProps = ComponentPropsWithoutRef<"code">
type PreProps = ComponentPropsWithoutRef<"pre">
type TableProps = ComponentPropsWithoutRef<"table">
type AnchorProps = ComponentPropsWithoutRef<"a">

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (typeof children === "number") return String(children)
  if (Array.isArray(children)) return children.map(getTextContent).join("")
  if (children && typeof children === "object" && "props" in children) {
    return getTextContent((children as { props: { children?: React.ReactNode } }).props.children)
  }
  return ""
}

export const mdxComponents: MDXComponents = {
  h1: ({ children, id, ...props }: HeadingProps) => {
    const text = getTextContent(children)
    const elementId = id || (text ? slugify(text) : undefined)
    return (
      <h1
        id={elementId}
        className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-4xl"
        {...props}
      >
        {children}
      </h1>
    )
  },

  h2: ({ children, id, ...props }: HeadingProps) => {
    const text = getTextContent(children)
    const elementId = id || (text ? slugify(text) : undefined)
    return (
      <h2
        id={elementId}
        className="group relative mt-12 md:mt-16 mb-5 flex items-center justify-between text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl border-b border-[#1C1C1A]/12 pb-3.5"
        {...props}
      >
        <span>{children}</span>
        {elementId && (
          <a
            href={`#${elementId}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8C5E38]/50 hover:text-[#8C5E38] text-xl font-mono font-normal pr-1"
            aria-label={`Link to ${text}`}
          >
            #
          </a>
        )}
      </h2>
    )
  },

  h3: ({ children, id, ...props }: HeadingProps) => {
    const text = getTextContent(children)
    const elementId = id || (text ? slugify(text) : undefined)
    return (
      <h3
        id={elementId}
        className="group relative mt-8 md:mt-10 mb-3 text-xl font-semibold tracking-tight text-[#1C1C1A] flex items-center justify-between"
        {...props}
      >
        <span>{children}</span>
        {elementId && (
          <a
            href={`#${elementId}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8C5E38]/40 hover:text-[#8C5E38] text-base font-mono font-normal"
            aria-label={`Link to ${text}`}
          >
            #
          </a>
        )}
      </h3>
    )
  },

  h4: ({ children, id, ...props }: HeadingProps) => {
    const text = getTextContent(children)
    const elementId = id || (text ? slugify(text) : undefined)
    return (
      <h4
        id={elementId}
        className="mt-6 mb-2 text-base font-semibold tracking-tight text-[#1C1C1A]"
        {...props}
      >
        {children}
      </h4>
    )
  },

  p: (props: ParagraphProps) => (
    <p className="mt-4 text-base leading-relaxed text-[#4A4742]" {...props} />
  ),

  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[#1C1C1A]" {...props}>
      {children}
    </strong>
  ),

  ul: (props: UlProps) => (
    <ul className="mt-4 space-y-2.5 list-none pl-0 text-base text-[#4A4742]" {...props} />
  ),

  ol: (props: OlProps) => (
    <ol className="mt-4 space-y-2.5 list-decimal pl-6 text-base text-[#4A4742]" {...props} />
  ),

  li: ({ children, ...props }: LiProps) => (
    <li className="relative pl-6 leading-relaxed" {...props}>
      <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-[#8C5E38]" />
      <span>{children}</span>
    </li>
  ),

  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="my-6 rounded-2xl border-l-4 border-[#8C5E38] bg-[#FAF6F0] p-5 text-sm italic leading-relaxed text-[#55534E] shadow-xs"
      {...props}
    />
  ),

  code: ({ children, ...props }: CodeProps) => (
    <code
      className="rounded-md border border-[#1C1C1A]/10 bg-[#FAF6F0] px-1.5 py-0.5 font-mono text-[13px] font-medium text-[#8C5E38]"
      {...props}
    >
      {children}
    </code>
  ),

  pre: (props: PreProps) => (
    <pre
      className="my-6 overflow-x-auto rounded-2xl border border-[#1C1C1A]/15 bg-[#1C1C1A] p-5 font-mono text-sm text-[#F5F2EB] shadow-md"
      {...props}
    />
  ),

  table: (props: TableProps) => (
    <div className="my-6 w-full overflow-x-auto rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] shadow-xs">
      <table className="w-full text-left text-sm text-[#4A4742]" {...props} />
    </div>
  ),

  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-[#1C1C1A]/15 bg-[#1C1C1A]/5 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1C1A]"
      {...props}
    />
  ),

  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-[#1C1C1A]/10 px-4 py-3 text-sm" {...props} />
  ),

  hr: () => <hr className="my-10 border-t border-[#1C1C1A]/15" />,

  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="font-medium text-[#8C5E38] underline decoration-[#8C5E38]/40 underline-offset-4 hover:decoration-[#8C5E38] transition-colors"
          {...props}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#8C5E38] underline decoration-[#8C5E38]/40 underline-offset-4 hover:decoration-[#8C5E38] transition-colors inline-flex items-center gap-0.5"
        {...props}
      >
        {children}
      </a>
    )
  },
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  }
}
