import React from "react"

/**
 * Komponen MenuStyle
 * Menyediakan aturan gaya CSS scoped khusus untuk animasi dan tata letak menu staggered:
 * - Mengatur dimensi dan posisi tirai pelapis (prelayers) dan panel drawer mobile
 * - Mengonfigurasi tipografi, efek bayangan arsitektural, dan variabel CSS aksen
 * - Menetapkan styling hover dan transisi untuk item navigasi dan daftar tautan sosial
 *
 * @returns {JSX.Element} Elemen tag style dengan deklarasi CSS menu
 */
export const MenuStyle: React.FC = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .staggered-menu-wrapper {
        position: relative;
        width: 100%;
      }
      .sm-prelayers {
        width: clamp(300px, 80vw, 440px);
      }
      .sm-prelayer {
        width: 100%;
      }
      .sm-panel {
        width: clamp(300px, 80vw, 440px);
        background: var(--oda-graphite, #1C1C1A);
        color: var(--oda-paper, #F2EFE8);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem 1.75rem 2rem 1.75rem;
        z-index: 50;
        overflow-y: auto;
        box-shadow: -16px 0 40px rgba(0, 0, 0, 0.35);
      }
      @media (min-width: 768px) {
        .sm-panel {
          padding: 1.75rem 3rem 2rem 2rem;
        }
      }
      .sm-panel-nav {
        display: flex;
        flex-direction: column;
      }
      .sm-panel-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .sm-panel-item {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: baseline;
      }
      .sm-panel-itemNum {
        font-size: 0.75rem;
        font-family: var(--font-mono, monospace);
        color: var(--sm-accent, #B7835A);
        margin-right: 0.85rem;
        user-select: none;
      }
      .sm-panel-itemLink {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.2;
        text-decoration: none;
        color: inherit;
        display: inline-block;
        overflow: hidden;
        letter-spacing: -0.02em;
        transition: color 0.2s ease, transform 0.2s ease;
      }
      .sm-panel-itemLink:hover {
        color: var(--sm-accent, #B7835A);
        transform: translateX(6px);
      }
      .sm-panel-itemLabel {
        display: inline-block;
        transform-origin: left bottom;
      }
      .sm-socials {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .sm-socials-title {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: #8B8983;
        font-family: var(--font-mono, monospace);
      }
      .sm-socials-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .sm-socials-link {
        font-size: 0.75rem;
        font-family: var(--font-mono, monospace);
        text-decoration: none;
        color: #F2EFE8;
        transition: color 0.2s ease;
      }
      .sm-socials-link:hover {
        color: var(--sm-accent, #B7835A);
      }
    `,
      }}
    />
  )
}

export default MenuStyle
