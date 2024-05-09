import localFont from 'next/font/local'
import { Inter, Open_Sans, Roboto } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
})
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--openSans',
})
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
})

export const Arial = localFont({
  src: './Arial.ttf',
  display: 'swap',
  variable: '--Arial',
})
export const ArialNarrowBold = localFont({
  src: './Arial-Narrow-Bold.ttf',
  display: 'swap',
  variable: '--ArialNarrowBold',
})
export const SegoePrint = localFont({
  src: './segoeprb.ttf',
  display: 'swap',
  variable: '--SegoePrint',
})
export const franklinGothicBook = localFont({
  src: './Franklin-Gothic-Book-Regular.ttf',
  display: 'swap',
  variable: '--franklinGothicBook',
})
export const franklinGothicBookItalic = localFont({
  src: './Franklin-Gothic-Book-Italic.ttf',
  display: 'swap',
  variable: '--franklinGothicBookItalic',
})
export const franklinGothicDemiCond = localFont({
  src: './Franklin-Gothic-Demi-Cond-Regular.ttf',
  display: 'swap',
  variable: '--franklinGothicDemiCond',
})
export const franklinGothicMediumCond = localFont({
  src: './Franklin-Gothic-Medium-Cond-Regular.ttf',
  display: 'swap',
  variable: '--franklinGothicMediumCond',
})
