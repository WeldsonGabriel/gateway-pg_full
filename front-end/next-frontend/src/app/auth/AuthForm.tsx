import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation"

export async function loginAction(formData: FormData) {
    "use server";
    const apiKey = formData.get("apiKey");

    const response = await fetch("http://localhost:8080/accounts", {
        headers: {
            'X-API-Key': apiKey as string,

        },
    });
    if (!response.ok) {
        throw new Error("Invalid API Key");
    }

    const cookiesStore = await cookies();
    cookiesStore.set("apiKey", apiKey as string);

    redirect("/invoices");
}
    

export function AuthForm(){
    return (
        <form className="space-y-6" action={loginAction}>
            <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium text-white">
                    API Key
                </label>
                <div className="flex gap-2">
                    <Input
                        id="apiKey"
                        placeholder="Digite sua API Key"
                        className="bg-[#2d3748] text-white"
                        name="apiKey"
                    />
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>

            <Alert className="bg-[#2d3748] border-indigo-600/50">
                <InfoIcon className="h-4 w-4 text-indigo-600" />
                <AlertTitle className="text-sm font-medium text-white">Como obter uma API Key?</AlertTitle>
                <AlertDescription className="text-xs text-gray-300 mt-1">
                    Para obter sua API Key, você precisa criar uma conta de comerciante. Entre em contato com nosso
                    suporte para mais informações.
                </AlertDescription>
            </Alert>
        </form>
    )
}