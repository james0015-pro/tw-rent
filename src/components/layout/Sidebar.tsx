import { NavLink } from 'react-router-dom'
import { Home, Search, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const links = [
    { to: '/', icon: Home, label: '所有物件' },
    { to: '/search', icon: Search, label: '進階篩選' },
    { to: '/about', icon: Info, label: '關於' },
  ]

  return (
    <aside className="w-[200px] h-full bg-surface border-r border-border-subtle flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-border-subtle">
        <div className="text-amber-primary font-bold text-sm flex items-center gap-2">
          <span className="cursor-blink">▌</span>
          TW-RENT
        </div>
        <div className="text-text-dim text-[9px] mt-1">591 租屋資訊終端機</div>
      </div>
      <nav className="flex-1 p-2">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 text-xs transition-colors',
                isActive
                  ? 'bg-amber-primary/10 text-amber-primary border-l-2 border-amber-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-alt border-l-2 border-transparent'
              )
            }
          >
            <Icon size={14} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-border-subtle">
        <div className="text-text-dim text-[9px]">DATA: 591.com.tw</div>
        <div className="text-text-dim text-[9px]">30 LISTINGS / 台北市</div>
      </div>
    </aside>
  )
}
