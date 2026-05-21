import { Menu } from 'lucide-react'

interface TopNavBarProps {
  isMobile: boolean
  onMenuClick: () => void
}

export function TopNavBar({ isMobile, onMenuClick }: TopNavBarProps) {
  return (
    <header className="sticky top-0 z-40 flex items-center h-12 px-4 bg-canvas/80 backdrop-blur-md border-b border-border-subtle">
      {isMobile && (
        <button onClick={onMenuClick} className="mr-3 text-text-secondary hover:text-amber-primary">
          <Menu size={18} />
        </button>
      )}
      <div className="flex items-center gap-2">
        <span className="text-amber-primary font-bold text-sm">🏠 TW-RENT</span>
        <span className="text-text-dim text-[10px] hidden sm:inline">TAIWAN RENTAL TERMINAL v1.0</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-text-dim text-[10px]">
          {new Date().toLocaleString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
        </span>
      </div>
    </header>
  )
}
