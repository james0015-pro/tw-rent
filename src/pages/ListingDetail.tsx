import { useParams, useNavigate } from 'react-router-dom'
import { rentalData } from '@/data/listings'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export function ListingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const listing = rentalData.find(l => l.link.endsWith(id || ''))

  if (!listing) {
    return (
      <div className="text-center py-16 text-text-dim">
        <div className="text-4xl mb-4">🏚️</div>
        <div>物件不存在</div>
        <button onClick={() => navigate('/')} className="mt-4 text-amber-primary hover:underline">返回列表</button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-text-secondary hover:text-amber-primary mb-6 text-xs"
      >
        <ArrowLeft size={14} /> 返回列表
      </button>

      <div className="bg-surface border border-border-subtle p-6 space-y-4">
        <div>
          <div className="text-text-dim text-[10px] mb-1">TITLE</div>
          <h1 className="text-sm font-bold text-text-primary leading-relaxed">{listing.title}</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-text-dim text-[10px] mb-1">PRICE</div>
            <div className="text-amber-primary text-lg font-bold">{listing.price.toLocaleString()} 元/月</div>
          </div>
          <div>
            <div className="text-text-dim text-[10px] mb-1">AREA</div>
            <div className="text-text-primary text-lg">{listing.area} 坪</div>
          </div>
          <div>
            <div className="text-text-dim text-[10px] mb-1">TYPE</div>
            <div className="text-text-primary">{listing.type}</div>
          </div>
          <div>
            <div className="text-text-dim text-[10px] mb-1">ROOMS</div>
            <div className="text-text-primary">{listing.rooms}</div>
          </div>
        </div>

        <div>
          <div className="text-text-dim text-[10px] mb-1">ADDRESS</div>
          <div className="text-text-primary text-sm">{listing.address}</div>
        </div>

        <div className="pt-4 border-t border-border-subtle">
          <a
            href={listing.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-primary/10 text-amber-primary border border-amber-primary/30 px-4 py-2 text-xs hover:bg-amber-primary/20 transition-colors"
          >
            <ExternalLink size={14} /> 在 591 查看原始物件
          </a>
        </div>
      </div>
    </div>
  )
}
