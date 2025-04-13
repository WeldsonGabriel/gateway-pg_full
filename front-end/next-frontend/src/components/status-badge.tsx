import { cn } from "@/lib/utils"

type StatusType = "aprovado" | "pendente" | "rejeitado"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    aprovado: {
      bg: "bg-approved/20",
      text: "text-approved",
      label: "Aprovado",
    },
    pendente: {
      bg: "bg-pending/20",
      text: "text-pending",
      label: "Pendente",
    },
    rejeitado: {
      bg: "bg-rejected/20",
      text: "text-rejected",
      label: "Rejeitado",
    },
  }

  const config = statusConfig[status]

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", config.bg, config.text, className)}>
      {config.label}
    </span>
  )
}
