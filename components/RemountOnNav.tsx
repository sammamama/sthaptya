"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RemountOnNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setKey((k) => k + 1);
  }, [pathname]);

  return <div key={key}>{children}</div>;
}
