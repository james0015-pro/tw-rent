interface ContentPageFooterProps {
  disclaimer: string
  sources: string
}

export function ContentPageFooter({ disclaimer, sources }: ContentPageFooterProps) {
  return (
    <div className="bg-surface border border-border-subtle p-4 text-center">
      <p className="text-text-dim text-[10px]">
        {disclaimer}
      </p>
      <p className="text-text-dim text-[10px] mt-1">
        {sources}
      </p>
    </div>
  )
}
