import './globals.css'

export const metadata = {
  title: 'Floating Gallery',
  description: 'Using linear interpolation and gsap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
