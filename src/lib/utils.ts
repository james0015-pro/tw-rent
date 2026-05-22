import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value: number): string {
  if (value >= 10000) {
    const wan = value / 10000
    return `${wan.toFixed(wan % 1 === 0 ? 0 : 1)}萬`
  }
  return value.toLocaleString()
}

export function formatArea(value: number): string {
  return `${value.toFixed(value % 1 === 0 ? 0 : 1)} 坪`
}

/** Extract district from address (e.g., "中山區-農安街" → "中山區") */
export function extractDistrict(address: string): string {
  const m = address.match(/^([\u4e00-\u9fff]+區)/)
  return m ? m[1] : '其他'
}

/** Get unique sorted districts from listing data */
export function getDistricts(listings: { address: string }[]): string[] {
  return [...new Set(listings.map(l => extractDistrict(l.address)))].sort()
}
