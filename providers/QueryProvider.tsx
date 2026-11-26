"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

/**
 * TanStack Query Provider.
 * Menyediakan QueryClient untuk seluruh komponen aplikasi.
 *
 * Komponen ini diperlukan agar hook useQuery() dan useMutation()
 * dapat digunakan pada komponen yang berada di dalam provider.
 */
export default function QueryProvider({
  children,
}: {
  children: ReactNode
}) {
  // Membuat satu instance QueryClient untuk aplikasi
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // Data dianggap masih segar selama 1 menit
            refetchOnWindowFocus: false, // Tidak mengambil ulang data saat tab aktif
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}