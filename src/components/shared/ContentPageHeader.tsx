import type { ReactNode } from 'react'

interface ContentPageHeaderProps {
  icon: ReactNode
  title: string
  dateSource: string
  description: string
}

export function ContentPageHeader({ icon, title, dateSource, description }: ContentPageHeaderProps) {
  return (
    <div className="bg-surface border border-amber-primary/20 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-amber-primary">
          {icon}
        </div>
        <div>
          <h1 className="text-sm font-bold text-amber-primary">{title}</h1>
          <p className="text-text-dim text-[10px]">{dateSource}</p>
        </div>
      </div>
      <p className="text-text-secondary text-xs leading-relaxed">
        {description}
      </p>
    </div>
  )
}
