import type React from "react"

import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthForm } from "../auth/AuthForm"


export default function AuthPage() {
  
  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md bg-[#1e293b]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Autenticação Gateway</CardTitle>
            <CardDescription className="text-gray-300">Insira sua API Key para acessar o sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm/>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
