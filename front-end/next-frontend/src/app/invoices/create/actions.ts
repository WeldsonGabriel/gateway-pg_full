'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createInvoice(formData: FormData) {
  try {
    const cookiesStore = await cookies();
    const apiKey = cookiesStore.get("apiKey")?.value;

    const amount = formData.get("amount")?.toString()?.replace(",", ".") || "0";
    const description = formData.get("description")?.toString() || "";
    const cardNumber = formData.get("card_number")?.toString() || "";
    const expiryMonth = formData.get("expiry_month")?.toString() || "01";
    const expiryYear = formData.get("expiry_year")?.toString() || "1970";
    const cvv = formData.get("cvv")?.toString() || "";
    const cardholderName = formData.get("cardholder_name")?.toString() || "";

    // Realiza a requisição para o backend
    const response = await fetch('http://localhost:8080/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey || '', // Obtendo a chave da API
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        description,
        card_number: cardNumber,
        cvv,
        expiry_month: parseInt(expiryMonth),
        expiry_year: parseInt(expiryYear),
        cardholder_name: cardholderName,
        payment_type: 'credit_card',
      }),
    });

    // Verifica se a resposta da requisição é bem-sucedida
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro ao criar fatura:", errorText);
      throw new Error("Falha ao criar fatura");
    }

    // Redireciona para a página da fatura
    redirect("/invoice");
  } catch (error) {
    console.error("Erro ao criar fatura:", error);
    throw error;
  }
}
