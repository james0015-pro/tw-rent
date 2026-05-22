export interface RentalListing {
  link: string
  title: string
  price: number
  type: string
  rooms: string
  area: number
  address: string
}

export interface CityData {
  city: string
  listings: RentalListing[]
}

export type RoomType = '全部' | '整層住家' | '獨立套房' | '分租套房' | '雅房'

export interface Filters {
  city: string
  district: string
  minPrice: number
  maxPrice: number
  roomType: RoomType
  minArea: number
  maxArea: number
  search: string
}
