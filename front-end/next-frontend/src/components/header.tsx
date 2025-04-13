import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  "use server";
  const cookiesStore = await cookies();
  cookiesStore.delete("apiKey");
  redirect("/auth");
}
export async function Header() {

const cookiesStore = await cookies();

const isAuthPage = cookiesStore.get("apiKey")?.value !== undefined;


  return (
    <header className="w-full bg-[#1a202c] border-b border-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white">
          Full Cycle Gateway
        </Link>

        {isAuthPage && (
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Olá, usuário</span>
          <form action={logoutAction}>
          <Button variant="destructive" size="sm" className="flex items-center gap-1"  >
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
          </form>
        </div>
        )}
      </div>
    </header>
  )
}
