import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "DiagnozerAI - אבחון תקלות רכב מתקדם עם בינה מלאכותית | אריאל פלדמן",
  description:
    "אבחון תקלות רכב מדויק ומהיר עם טכנולוגיית AI מתקדמת. אריאל פלדמן, מומחה עם 20+ שנות ניסיון באבחון רכב. שירות זמין 24/7 עם דיוק של מעל 90%.",
  keywords:
    "אבחון תקלות רכב, תקלה ברכב, אבחון רכב, בינה מלאכותית רכב, DiagnozerAI, אריאל פלדמן, מכונאי רכב, אבחון תקלות, car diagnostics, vehicle diagnostics, automotive AI",
  generator: "DiagnozerAI",
  robots: "index, follow",
  openGraph: {
    title: "DiagnozerAI - אבחון תקלות רכב מתקדם עם בינה מלאכותית",
    description: "פתרון AI מתקדם לאבחון תקלות רכב עם דיוק של מעל 90%. שירות מקצועי זמין 24/7.",
    url: "https://diagnozer.ai",
    siteName: "DiagnozerAI",
    locale: "he_IL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
