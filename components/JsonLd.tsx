export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sushilsharmaassociates.com",
    name: "Sushil Sharma Associates",
    description:
      "Architecture firm in Shimla specialising in hill construction, residential, hospitality, institutional, and commercial projects across Himachal Pradesh since 1997.",
    url: "https://sushilsharmaassociates.com",
    logo: "https://sushilsharmaassociates.com/logo.webp",
    image: "https://sushilsharmaassociates.com/og-image.webp",
    telephone: ["+910177-2843555", "+91-7018815510"],
    email: "ssashimla@gmail.com",
    foundingDate: "1997",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sunbreeze Building, Sanjauli Chowk, Near Gurudwara, Sanjauli",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      postalCode: "171006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1048,
      longitude: 77.1734,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://sushilsharmaassociates.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
