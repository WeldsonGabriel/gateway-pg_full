'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { createInvoice } from "./actions";

export default function InvoiceForm() {
  // Função de tratamento do envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(event.target as HTMLFormElement);

    // Chama a função createInvoice com os dados do formulário
    await createInvoice(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium text-white">
              Valor (R$)
            </label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step={0.01}
              min={0}
              defaultValue={0.01}
              placeholder="0,00"
              className="bg-[#2d3748] text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-white">
              Descrição
            </label>
            <Textarea
              id="description"
              name="description"
              defaultValue={"test"}
              placeholder="Descreva o motivo do pagamento"
              className="min-h-[120px] bg-[#2d3748] text-white"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium text-white">Dados do Cartão</h2>

          <div className="space-y-2">
            <label htmlFor="card_number" className="text-sm font-medium text-white">
              Número do Cartão
            </label>
            <div className="relative">
              <Input
                id="card_number"
                name="card_number"
                placeholder="0000000000000000"
                defaultValue={"1111111111111111"}
                maxLength={16}
                className="bg-[#2d3748] pr-10 text-white"
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry_month" className="text-sm font-medium text-white">
                Mês de Expiração
              </label>
              <Input
                id="expiry_month"
                name="expiry_month"
                defaultValue={12}
                placeholder="MM"
                className="bg-[#2d3748] text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="expiry_year" className="text-sm font-medium text-white">
                Ano de Expiração
              </label>
              <Input
                id="expiry_year"
                name="expiry_year"
                defaultValue={2024}
                placeholder="AAAA"
                className="bg-[#2d3748] text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="cvv" className="text-sm font-medium text-white">
              CVV
            </label>
            <Input
              id="cvv"
              name="cvv"
              defaultValue={123}
              placeholder="123"
              className="bg-[#2d3748] text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cardholder_name" className="text-sm font-medium text-white">
              Nome no Cartão
            </label>
            <Input
              id="cardholder_name"
              name="cardholder_name"
              defaultValue={"name"}
              placeholder="Como aparece no cartão"
              className="bg-[#2d3748] text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end gap-4">
        <Button type="button" variant="outline" className="bg-[#2d3748] text-white">
          Cancelar
        </Button>
        <Button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
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
  );
}
