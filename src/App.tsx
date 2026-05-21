import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { FeedPage } from '@/pages/FeedPage'
import { ListingDetail } from '@/pages/ListingDetail'
import { InfoPage } from '@/pages/InfoPage'
import { SocialHousingPage } from '@/pages/SocialHousingPage'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/social-housing" element={<SocialHousingPage />} />
      </Routes>
    </AppShell>
  )
}
