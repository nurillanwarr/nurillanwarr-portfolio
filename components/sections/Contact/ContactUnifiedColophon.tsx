"use client"

import React from "react"
import { ContactCta } from "./ContactCta"
import { ContactBrandSignature } from "./ContactBrandSignature"
import { ContactColophonTable } from "./ContactColophonTable"

/**
 * Komponen ContactUnifiedColophon
 * Menyatukan dan mengorkestrasi 3 modul arsitektural seksi kontak:
 * 1. ContactCta: Live clock WIB, headline monumental "LET'S WORK TOGETHER", dan tombol aksi email/CV
 * 2. ContactBrandSignature: Header framing line, tipografi raksasa "N28", dan koordinat studio
 * 3. ContactColophonTable: Tabel kolofon 12-kotak (Office, Studio, Contact, Sheet, Scale, Legal, Return)
 */
export const ContactUnifiedColophon: React.FC = () => {
  return (
    <div className="relative mt-8 pt-8 md:mt-12 md:pt-10">
      {/* 1. Hero Call to Action ("LET'S WORK TOGETHER") */}
      <ContactCta />

      {/* 2. Architectural Signature & Monolithic N28 Wordmark */}
      <ContactBrandSignature />

      {/* 3. 12-Cell Architectural Blueprint Colophon Grid */}
      <ContactColophonTable />
    </div>
  )
}

export default ContactUnifiedColophon
