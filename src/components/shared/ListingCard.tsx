import { useNavigate } from 'react-router-dom'
import type { RentalListing } from '@/types'
import { formatPrice, formatArea } from '@/lib/utils'
import { MapPin, Home, Maximize } from 'lucide-react'

interface ListingCardProps {
  listing: RentalListing
  index: number
}

export function ListingCard({ listing, index }: ListingCardProps) {
  const navigate = useNavigate()
  const id = listing.link.split('/').pop()?.split('?')[0] || ''

  const pricePerPing = listing.area > 0 ? Math.round(listing.price / listing.area) : 0

  return (
    <div
      onClick={() => navigate(`/listing/${id}`)}
      className="bg-surface border border-border-subtle hover:border-amber-primary/30 cursor-pointer transition-all group overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-border-subtle flex items-center justify-between">
        <span className="text-text-dim text-[10px]">
          [{String(index + 1).padStart(2, '0')}]
        </span>
        <span className="text-text-dim text-[10px]">
          {listing.address.split('-')[0]}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <h3 className="text-xs text-text-primary leading-relaxed line-clamp-2 group-hover:text-amber-primary transition-colors">
          {listing.title}
        </h3>

        <div className="flex items-baseline gap-1">
          <span className="text-amber-primary text-lg font-bold">
            {formatPrice(listing.price)}
          </span>
          <span className="text-text-dim text-[10px]">/月</span>
        </div>

        <div className="flex items-center gap-3 text-text-secondary text-[11px]">
          <span className="flex items-center gap-1">
            <Home size={11} />
            {listing.rooms}
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={11} />
            {formatArea(listing.area)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-text-dim text-[10px]">
          <MapPin size={10} />
          {listing.address}
        </div>

        <div className="text-text-dim text-[9px]">
          每坪 {pricePerPing.toLocaleString()} 元
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-border-subtle flex items-center justify-between text-[9px]">
        <span className="text-text-dim">{listing.type}</span>
        <span className="text-amber-primary/50 opacity-0 group-hover:opacity-100 transition-opacity">
          VIEW →
        </span>
      </div>
    </div>
  )
}
