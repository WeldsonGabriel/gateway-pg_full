import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"

interface InvoiceDetailsPageProps {
  params: {
    id: string
  }
}

export default function InvoiceDetailsPage({ params }: InvoiceDetailsPageProps) {
  // Simulando dados da fatura
  const invoice = {
    id: `#${params.id}`,
    status: "aprovado" as const,
    createdAt: "30/03/2025 às 14:30",
    value: "R$ 1.500,00",
    description: "Compra Online #123",
    paymentMethod: "Cartão de Crédito",
    cardLastDigits: "1234",
    cardHolder: "João da Silva",
    accountId: "ACC-12345",
    clientIp: "192.168.1.1",
    device: "Desktop - Chrome",
    timeline: [
      {
        status: "Fatura Criada",
        date: "30/03/2025 14:30",
      },
      {
        status: "Pagamento Processado",
        date: "30/03/2025 14:32",
      },
      {
        status: "Transação Aprovada",
        date: "30/03/2025 14:35",
      },
    ],
  }

  return (
    <PageContainer username="usuário">
      <Card className="bg-[#1e293b] border-gray-800">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <h1 className="text-2xl font-bold text-white">Fatura {invoice.id}</h1>
                <StatusBadge status={invoice.status} />
              </div>
              <Button variant="outline" className="bg-[#2d3748] text-white">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </div>

            <p className="text-sm text-gray-300">Criada em {invoice.createdAt}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#2d3748] border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4 text-white">Informações da Fatura</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">ID da Fatura</span>
                      <span className="text-white">{invoice.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Valor</span>
                      <span className="text-white">{invoice.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Data de Criação</span>
                      <span className="text-white">
                        {invoice.createdAt.split(" ")[0]} {invoice.createdAt.split(" ")[2]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Última Atualização</span>
                      <span className="text-white">30/03/2025 14:35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Descrição</span>
                      <span className="text-white">{invoice.description}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2d3748] border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4 text-white">Status da Transação</h2>
                  <div className="space-y-6">
                    {invoice.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.status}</p>
                          <p className="text-sm text-gray-300">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2d3748] border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4 text-white">Método de Pagamento</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Tipo</span>
                      <span className="text-white">{invoice.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Últimos Dígitos</span>
                      <span className="text-white">**** **** **** {invoice.cardLastDigits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Titular</span>
                      <span className="text-white">{invoice.cardHolder}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2d3748] border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4 text-white">Dados Adicionais</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">ID da Conta</span>
                      <span className="text-white">{invoice.accountId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">IP do Cliente</span>
                      <span className="text-white">{invoice.clientIp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Dispositivo</span>
                      <span className="text-white">{invoice.device}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
