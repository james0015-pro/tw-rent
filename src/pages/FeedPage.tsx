import { useState, useMemo } from 'react'
import { rentalData } from '@/data/listings'
import type { Filters, RoomType } from '@/types'
import { ListingCard } from '@/components/shared/ListingCard'

export function FeedPage() {
  const [filters, setFilters] = useState<Filters>({
    city: '全部',
    minPrice: 0,
    maxPrice: 0,
    roomType: '全部',
    minArea: 0,
    maxArea: 0,
    search: '',
  })

  const [sortBy, setSortBy] = useState<'price' | 'area' | 'price_desc'>('price')

  const filtered = useMemo(() => {
    let result = [...rentalData]

    if (filters.search) {
      const q = filters.search.toLowerCase()
      result = result.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.rooms.includes(q)
      )
    }

    if (filters.roomType !== '全部') {
      result = result.filter(l => l.type === filters.roomType)
    }

    if (filters.minPrice > 0) result = result.filter(l => l.price >= filters.minPrice * 10000)
    if (filters.maxPrice > 0) result = result.filter(l => l.price <= filters.maxPrice * 10000)
    if (filters.minArea > 0) result = result.filter(l => l.area >= filters.minArea)
    if (filters.maxArea > 0) result = result.filter(l => l.area <= filters.maxArea)

    result.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'price_desc') return b.price - a.price
      return a.area - b.area
    })

    return result
  }, [filters, sortBy])

  const roomTypes: RoomType[] = ['全部', '整層住家', '獨立套房', '分租套房', '雅房']

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="bg-surface border border-border-subtle p-3 flex flex-wrap gap-3 items-center text-xs">
        <input
          type="text"
          placeholder="搜尋 地址/關鍵字/房型..."
          value={filters.search}
          onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
          className="bg-canvas border border-border-default text-text-primary px-3 py-1.5 w-48 focus:border-amber-primary outline-none font-mono text-xs"
        />

        <select
          value={filters.roomType}
          onChange={e => setFilters(f => ({ ...f, roomType: e.target.value as RoomType }))}
          className="bg-canvas border border-border-default text-text-primary px-2 py-1.5 outline-none font-mono text-xs"
        >
          {roomTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <div className="flex items-center gap-1">
          <span className="text-text-dim">價格</span>
          <input type="number" placeholder="最低萬"
            value={filters.minPrice || ''}
            onChange={e => setFilters(f => ({ ...f, minPrice: Number(e.target.value) }))}
            className="bg-canvas border border-border-default text-text-primary w-16 px-2 py-1.5 outline-none focus:border-amber-primary font-mono text-xs"
          />
          <span className="text-text-dim">-</span>
          <input type="number" placeholder="最高萬"
            value={filters.maxPrice || ''}
            onChange={e => setFilters(f => ({ ...f, maxPrice: Number(e.target.value) }))}
            className="bg-canvas border border-border-default text-text-primary w-16 px-2 py-1.5 outline-none focus:border-amber-primary font-mono text-xs"
          />
        </div>

        <div className="flex items-center gap-1">
          <span className="text-text-dim">坪數</span>
          <input type="number" placeholder="最小"
            value={filters.minArea || ''}
            onChange={e => setFilters(f => ({ ...f, minArea: Number(e.target.value) }))}
            className="bg-canvas border border-border-default text-text-primary w-14 px-2 py-1.5 outline-none focus:border-amber-primary font-mono text-xs"
          />
          <span className="text-text-dim">-</span>
          <input type="number" placeholder="最大"
            value={filters.maxArea || ''}
            onChange={e => setFilters(f => ({ ...f, maxArea: Number(e.target.value) }))}
            className="bg-canvas border border-border-default text-text-primary w-14 px-2 py-1.5 outline-none focus:border-amber-primary font-mono text-xs"
          />
        </div>

        <div className="flex items-center gap-1 ml-auto">
          <span className="text-text-dim">排序</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as typeof sortBy)}
            className="bg-canvas border border-border-default text-text-primary px-2 py-1.5 outline-none font-mono text-xs"
          >
            <option value="price">價格 ↑</option>
            <option value="price_desc">價格 ↓</option>
            <option value="area">坪數 ↑</option>
          </select>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center gap-4 text-xs text-text-secondary px-1">
        <span className="text-amber-primary font-bold">{filtered.length}</span> 筆物件
        {filtered.length > 0 && (
          <>
            <span className="text-text-dim">|</span>
            <span>最低 <span className="text-green-primary">{filtered[0]?.price.toLocaleString()}</span> 元</span>
            <span className="text-text-dim">|</span>
            <span>最高 <span className="text-red-primary">{filtered[filtered.length-1]?.price.toLocaleString()}</span> 元</span>
          </>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((listing, i) => (
          <ListingCard key={listing.link} listing={listing} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-dim text-xs">
          <div className="text-4xl mb-4">🔍</div>
          <div>沒有符合條件的物件</div>
          <div className="mt-2">試著調整篩選條件</div>
        </div>
      )}
    </div>
  )
}
