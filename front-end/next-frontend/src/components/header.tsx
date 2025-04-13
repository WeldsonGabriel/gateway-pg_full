import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface HeaderProps {
  username?: string
}

export function Header({ username = "usuário" }: HeaderProps) {
  return (
    <header className="w-full bg-[#1a202c] border-b border-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-semibold text-white">
          Full Cycle Gateway
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Olá, {username}</span>
          <Button variant="destructive" size="sm" className="flex items-center gap-1">
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
