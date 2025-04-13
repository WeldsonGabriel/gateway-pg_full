"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

export default function NovaFaturaPage() {
  const router = useRouter()
  const [valor, setValor] = useState("")
  const [descricao, setDescricao] = useState("")
  const [numeroCartao, setNumeroCartao] = useState("")
  const [dataExpiracao, setDataExpiracao] = useState("")
  const [cvv, setCvv] = useState("")
  const [nomeCartao, setNomeCartao] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para processar o pagamento
    router.push("/dashboard")
  }

  const handleCancel = () => {
    router.push("/dashboard")
  }

  // Calcula valores
  const subtotal = Number.parseFloat(valor.replace(/[^\d,]/g, "").replace(",", ".")) || 0
  const taxa = subtotal * 0.02
  const total = subtotal + taxa

  // Formata valores para exibição
  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <PageContainer username="usuário">
      <Card className="bg-[#1e293b] border-gray-800">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Criar Nova Fatura</h1>
              <p className="text-gray-300">Preencha os dados abaixo para processar um novo pagamento</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="valor" className="text-sm font-medium text-white">
                      Valor
                    </label>
                    <Input
                      id="valor"
                      placeholder="R$ 0,00"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      className="bg-[#2d3748] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="descricao" className="text-sm font-medium text-white">
                      Descrição
                    </label>
                    <Textarea
                      id="descricao"
                      placeholder="Descreva o motivo do pagamento"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      className="min-h-[120px] bg-[#2d3748] text-white"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white">Dados do Cartão</h2>

                  <div className="space-y-2">
                    <label htmlFor="numeroCartao" className="text-sm font-medium text-white">
                      Número do Cartão
                    </label>
                    <div className="relative">
                      <Input
                        id="numeroCartao"
                        placeholder="0000 0000 0000 0000"
                        value={numeroCartao}
                        onChange={(e) => setNumeroCartao(e.target.value)}
                        className="bg-[#2d3748] pr-10 text-white"
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="dataExpiracao" className="text-sm font-medium text-white">
                        Data de Expiração
                      </label>
                      <Input
                        id="dataExpiracao"
                        placeholder="MM/AA"
                        value={dataExpiracao}
                        onChange={(e) => setDataExpiracao(e.target.value)}
                        className="bg-[#2d3748] text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cvv" className="text-sm font-medium text-white">
                        CVV
                      </label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="bg-[#2d3748] text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="nomeCartao" className="text-sm font-medium text-white">
                      Nome no Cartão
                    </label>
                    <Input
                      id="nomeCartao"
                      placeholder="Como aparece no cartão"
                      value={nomeCartao}
                      onChange={(e) => setNomeCartao(e.target.value)}
                      className="bg-[#2d3748] text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white">{formatarValor(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Taxa de Processamento (2%)</span>
                    <span className="text-white">{formatarValor(taxa)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span className="text-white">Total</span>
                    <span className="text-white">{formatarValor(total)}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={handleCancel} className="bg-[#2d3748] text-white">
                  Cancelar
                </Button>
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
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
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Processar Pagamento
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
