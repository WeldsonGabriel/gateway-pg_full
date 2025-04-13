import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StatusBadge } from "@/components/status-badge"
import { Eye, Download, ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function DashboardPage() {
  // Dados de exemplo para a tabela
  const invoices = [
    {
      id: "#INV-001",
      date: "30/03/2025",
      description: "Compra Online #123",
      value: "R$ 1.500,00",
      status: "aprovado" as const,
    },
    {
      id: "#INV-002",
      date: "29/03/2025",
      description: "Serviço Premium",
      value: "R$ 15.000,00",
      status: "pendente" as const,
    },
    {
      id: "#INV-003",
      date: "28/03/2025",
      description: "Assinatura Mensal",
      value: "R$ 99,90",
      status: "rejeitado" as const,
    },
  ]

  return (
    <PageContainer username="usuário">
      <Card className="bg-[#1e293b] border-gray-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-2xl font-bold text-white">Faturas</CardTitle>
            <CardDescription className="text-gray-300">Gerencie suas faturas e acompanhe os pagamentos</CardDescription>
          </div>
          <Link href="/dashboard/nova-fatura">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-1 h-4 w-4" /> Nova Fatura
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#2d3748] p-4 rounded-md">
              <div>
                <label className="text-sm text-gray-300">Status</label>
                <Select defaultValue="todos">
                  <SelectTrigger className="bg-[#1e293b] text-white">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e293b] text-white">
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="aprovado">Aprovado</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="rejeitado">Rejeitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-300">Data Inicial</label>
                <Input type="text" placeholder="dd/mm/aaaa" className="bg-[#1e293b] text-white" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Data Final</label>
                <Input type="text" placeholder="dd/mm/aaaa" className="bg-[#1e293b] text-white" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Buscar</label>
                <Input type="text" placeholder="ID ou descrição" className="bg-[#1e293b] text-white" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-300 border-b border-gray-800">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">DATA</th>
                    <th className="text-left py-3 px-4">DESCRIÇÃO</th>
                    <th className="text-left py-3 px-4">VALOR</th>
                    <th className="text-left py-3 px-4">STATUS</th>
                    <th className="text-right py-3 px-4">AÇÕES</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-800">
                      <td className="py-3 px-4">{invoice.id}</td>
                      <td className="py-3 px-4">{invoice.date}</td>
                      <td className="py-3 px-4">{invoice.description}</td>
                      <td className="py-3 px-4">{invoice.value}</td>
                      <td className="py-3 px-4">
                        <StatusBadge status={invoice.status} />
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/dashboard/faturas/${invoice.id.replace("#", "")}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-300">Mostrando 1 - 3 de 50 resultados</p>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-[#2d3748] text-white">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="sm" className="h-8 w-8 bg-indigo-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 bg-[#2d3748] text-white">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 bg-[#2d3748] text-white">
                  3
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 bg-[#2d3748] text-white">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
