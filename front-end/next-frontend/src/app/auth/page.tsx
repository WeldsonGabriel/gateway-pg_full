"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function AuthPage() {
  const [apiKey, setApiKey] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (apiKey.trim()) {
      router.push("/dashboard")
    }
  }

  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md bg-[#1e293b]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Autenticação Gateway</CardTitle>
            <CardDescription className="text-gray-300">Insira sua API Key para acessar o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium text-white">
                  API Key
                </label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    placeholder="Digite sua API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-[#2d3748] text-white"
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
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
