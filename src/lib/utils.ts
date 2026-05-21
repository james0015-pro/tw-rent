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
