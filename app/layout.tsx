import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PropCare - Landlord Maintenance Manager',
  description: 'Value Proposition: Solves landlords' improper communication/scheduling of maintenance. Centralized platform for tenant requests, automated scheduling, and contractor coordination. Reduces frustrations, delays, and improves tenant satisfaction.

Target Customer: Small to medium-sized independent landlords, property managers with 5-50 residential units, and real estate investors.

---
Category: Micro-SaaS
Target Market: Small to medium-sized independent landlords, property managers with 5-50 residential units, and real estate investors.
Source Hypothesis ID: 56e444d7-1dcc-4045-b855-91a327ae5833
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PropCare - Landlord Maintenance Manager</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
