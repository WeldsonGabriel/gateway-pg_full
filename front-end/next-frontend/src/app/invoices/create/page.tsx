import type React from "react"
import InvoiceForm from "./invoiceForm"

export default function createInvoicesPage() {
  return (
    <div className="max-w-8xl mx-auto p-6 min-h-screen bg-[#0a0f1c]">
      <div className="bg-[#111827] rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Criar Nova Fatura</h1>
          <p className="text-gray-400">Preencha os dados abaixo para processar um novo pagamento</p>
        </div>
        <div className="bg-[#1a202c] rounded-lg p-6 border border-gray-800">
          <InvoiceForm/>
        </div>
      </div>
    </div>
  )
}
