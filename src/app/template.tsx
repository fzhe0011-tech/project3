'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);
  useEffect(() => setKey(pathname), [pathname]);

  return (
    <div key={key} className="animate-fadeInUp">
      {children}
    </div>
  );
}