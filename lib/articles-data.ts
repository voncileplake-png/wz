export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  publishedAt: Date
}

export const articles: Article[] = [
  // Marriott Hotels
  {
    id: "marriott-full-list",
    title: "Marriott Hotels Corporate and Discount Codes Full List",
    excerpt:
      "Comprehensive guide to all Marriott corporate rates and discount codes available for business travelers and corporate bookings.",
    content:
      "Corporate rates are usually stated as strictly only for corporate use by employees, so they are to be used at your own risk, especially as you may need relevant ID when checking in. Always check the details of the corporate rate during your booking with Marriott Hotels. Corporate travelers can often benefit from cheaper stays with corporate codes.",
    category: "Marriott Hotels",
    categorySlug: "marriott-hotels",
    publishedAt: new Date("2024-01-15"),
  },
  {
    id: "marriott-hyatt-intercontinental",
    title: "Consolidated list for the Hyatt, InterContinental and Marriott",
    excerpt: "A comprehensive comparison of corporate codes across three major hotel chains.",
    content:
      "This consolidated list provides an overview of corporate rate codes available across Hyatt, InterContinental, and Marriott hotel chains, making it easier for corporate travelers to compare and choose the best options.",
    category: "Marriott Hotels",
    categorySlug: "marriott-hotels",
    publishedAt: new Date("2024-01-10"),
  },
  {
    id: "marriott-corporate-rates",
    title: "Marriott Hotels Corporate Rate Codes",
    excerpt: "Essential corporate rate codes for Marriott properties worldwide.",
    content:
      "Discover the most useful corporate rate codes for Marriott Hotels that can help you save on your business travels.",
    category: "Marriott Hotels",
    categorySlug: "marriott-hotels",
    publishedAt: new Date("2024-01-05"),
  },
  {
    id: "marriott-aaa-discount",
    title: "Marriott Hotels Discount Codes for AAA Members",
    excerpt: "Special discount codes available for AAA members at Marriott properties.",
    content:
      "AAA members can access exclusive discount codes at Marriott Hotels, providing additional savings on top of standard rates.",
    category: "Marriott Hotels",
    categorySlug: "marriott-hotels",
    publishedAt: new Date("2023-12-20"),
  },
  {
    id: "marriott-shanghai",
    title: "Shanghai Marriott Hotels Corporate Rate 500 RMB Discount",
    excerpt: "Exclusive corporate rate for Shanghai Marriott properties with breakfast included.",
    content:
      "Get 500 RMB discount on Shanghai Marriott Hotels with Stay+ benefits and breakfast included. Perfect for business travelers visiting Shanghai.",
    category: "Marriott Hotels",
    categorySlug: "marriott-hotels",
    publishedAt: new Date("2023-12-15"),
  },

  // Best Western Hotels
  {
    id: "best-western-corporate",
    title: "Best Western Hotels Corporate Codes",
    excerpt: "Corporate rate codes for Best Western Hotels worldwide.",
    content:
      "Best Western Hotels offers competitive corporate rates for business travelers. Learn about the available corporate codes and how to use them.",
    category: "Best Western Hotels",
    categorySlug: "best-western-hotels",
    publishedAt: new Date("2024-01-12"),
  },

  // Hyatt Gold Passport
  {
    id: "hyatt-hilton",
    title: "Hyatt Hotels Corporate Codes - Hilton Hotels",
    excerpt: "Corporate codes for Hyatt and Hilton properties.",
    content: "Comprehensive guide to corporate codes available at Hyatt and Hilton Hotels for business travelers.",
    category: "Hyatt Gold Passport",
    categorySlug: "hyatt-gold-passport",
    publishedAt: new Date("2024-01-08"),
  },
  {
    id: "hyatt-wuhan",
    title: "Hyatt Hotels Corporate Codes - Wuhan",
    excerpt: "Special corporate rates for Hyatt properties in Wuhan.",
    content: "Discover exclusive corporate rates for Hyatt Hotels in Wuhan, including breakfast and lounge access.",
    category: "Hyatt Gold Passport",
    categorySlug: "hyatt-gold-passport",
    publishedAt: new Date("2024-01-03"),
  },
  {
    id: "hyatt-shanghai",
    title: "Hyatt Hotels Corporate Codes - Shanghai",
    excerpt: "Corporate rate codes for Hyatt Hotels in Shanghai.",
    content: "Access special corporate rates at Hyatt Hotels in Shanghai with additional benefits.",
    category: "Hyatt Gold Passport",
    categorySlug: "hyatt-gold-passport",
    publishedAt: new Date("2023-12-28"),
  },
  {
    id: "wuhan-hilton-corporate",
    title: "Corporate Rate Entry for Wuhan Hilton Hotels 700 RMB/Night",
    excerpt: "Exclusive corporate rate for Wuhan Hilton with breakfast and lounge access.",
    content:
      "Book Wuhan Hilton Hotels at 700 RMB per night with corporate rate, including breakfast and executive lounge access.",
    category: "Hyatt Gold Passport",
    categorySlug: "hyatt-gold-passport",
    publishedAt: new Date("2023-12-25"),
  },

  // Carlson Hotels
  {
    id: "carlson-corporate",
    title: "Carlson Hotels Corporate Codes",
    excerpt: "Main corporate rate codes for Carlson Hotels Group.",
    content:
      "Carlson Hotels Group offers various corporate rate codes for business travelers. Learn how to access these special rates.",
    category: "Carlson Hotels",
    categorySlug: "carlson-hotels",
    publishedAt: new Date("2024-01-06"),
  },

  // Wyndham Hotels
  {
    id: "wyndham-main-codes",
    title: "Wyndham Hotels Group's Main Corporate Rate Codes",
    excerpt: "Essential corporate codes for Wyndham Hotels properties.",
    content: "Comprehensive guide to Wyndham Hotels Group's main corporate rate codes available nationwide.",
    category: "Wyndham Hotels",
    categorySlug: "wyndham-hotels",
    publishedAt: new Date("2024-01-11"),
  },
  {
    id: "wyndham-corporate-rates",
    title: "Wyndham Hotels Corporate Rate Codes",
    excerpt: "Corporate rate codes for Wyndham Hotels nationwide.",
    content:
      "Access corporate rate codes for Wyndham Hotels across the country with special benefits for business travelers.",
    category: "Wyndham Hotels",
    categorySlug: "wyndham-hotels",
    publishedAt: new Date("2024-01-04"),
  },

  // Third-Party Booking Platforms
  {
    id: "expedia-rewards",
    title: "Expedia Travel Rewards Program Helps You Save on Hotel Bookings",
    excerpt: "Learn how Expedia's rewards program can help you save money on hotel bookings.",
    content:
      "Expedia Travel Rewards Program offers various benefits and discounts for frequent travelers. Discover how to maximize your savings.",
    category: "Third-Party Booking Platforms",
    categorySlug: "third-party-platforms",
    publishedAt: new Date("2024-01-14"),
  },
  {
    id: "agoda-discount",
    title: "Agoda.com Discount Codes Help You Save on Hotel Bookings",
    excerpt: "Exclusive discount codes for Agoda.com hotel bookings.",
    content:
      "Agoda.com offers various discount codes that can help you save significantly on hotel bookings worldwide.",
    category: "Third-Party Booking Platforms",
    categorySlug: "third-party-platforms",
    publishedAt: new Date("2024-01-09"),
  },
  {
    id: "hotels-com-subscription",
    title: "Good Subscription Hotels.Com Discount Codes: Stay 10 Nights Get 1 Free",
    excerpt: "Hotels.com loyalty program offers stay 10 nights and get 1 free, plus 10% savings.",
    content:
      "Hotels.com offers an excellent loyalty program where you can stay 10 nights and get 1 free, plus save 10% on individual bookings.",
    category: "Third-Party Booking Platforms",
    categorySlug: "third-party-platforms",
    publishedAt: new Date("2024-01-02"),
  },
  {
    id: "hotels-com-discount",
    title: "Hotels.com Discount Codes Help You Save on Hotel Bookings",
    excerpt: "Various discount codes available on Hotels.com for hotel bookings.",
    content:
      "Discover the best discount codes on Hotels.com that can help you save money on your hotel bookings worldwide.",
    category: "Third-Party Booking Platforms",
    categorySlug: "third-party-platforms",
    publishedAt: new Date("2023-12-30"),
  },
]

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles
    .filter((article) => article.categorySlug === categorySlug)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}

export function getCategoryInfo(categorySlug: string) {
  const categoryMap: Record<string, { title: string; description: string }> = {
    "marriott-hotels": {
      title: "Marriott Hotels",
      description: "Marriott Hotels Corporate and Discount Codes",
    },
    "best-western-hotels": {
      title: "Best Western Hotels",
      description: "Best Western Hotels Corporate Codes",
    },
    "hyatt-gold-passport": {
      title: "Hyatt Gold Passport",
      description: "Hyatt Hotels Corporate Codes",
    },
    "carlson-hotels": {
      title: "Carlson Hotels",
      description: "Carlson Hotels Group's Main Corporate Rate Codes",
    },
    "wyndham-hotels": {
      title: "Wyndham Hotels",
      description: "Corporate Rate Entry for Wyndham Hotels Nationwide",
    },
    "third-party-platforms": {
      title: "Third-Party Booking Platforms",
      description: "Expedia Travel Rewards Program Helps You Save on Hotel Bookings",
    },
  }
  return categoryMap[categorySlug] || { title: "Category", description: "" }
}
