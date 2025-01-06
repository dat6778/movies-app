import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <Header />
          <Sidebar />
          <main className="pl-60 pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

