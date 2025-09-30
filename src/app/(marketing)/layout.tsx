
import type { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const siteName = 'QAWala';

  return (
    <div className="flex min-h-screen flex-col">
      <Header siteName={siteName} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
