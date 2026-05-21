import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { FeedPage } from '@/pages/FeedPage'
import { ListingDetail } from '@/pages/ListingDetail'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
      </Routes>
    </AppShell>
  )
}
