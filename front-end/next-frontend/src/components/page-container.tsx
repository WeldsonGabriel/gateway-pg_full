import type { ReactNode } from "react"
import { Header } from "@/components/header"

interface PageContainerProps {
  children: ReactNode
  username?: string
}

export function PageContainer({ children, username }: PageContainerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a202c] text-white">
      <Header username={username} />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <footer className="py-4 text-center text-sm text-gray-300">
        © 2025 Full Cycle Gateway. Todos os direitos reservados.
      </footer>
    </div>
  )
}
