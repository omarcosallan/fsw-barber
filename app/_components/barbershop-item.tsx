import Image from "next/image"
import type { Barbershop } from "../generated/prisma/client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="min-w-41.75 rounded-2xl p-0">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-39.75 w-full">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />

          <Badge
            className="absolute top-2 left-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
