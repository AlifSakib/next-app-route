import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App with App Layout',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body >
        <header>
          <h1 className="text-2xl">
            This is the header
          </h1>
        </header>
        {children}
        {/* Footer */}
        <footer>
          <h1 className="text-2xl">
            This is the footer
          </h1>
        </footer>
        </body>
    </html>
  )
}
