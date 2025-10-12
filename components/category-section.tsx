"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    title: "Marriott Hotels",
    slug: "marriott-hotels",
    description: "Marriott Hotels Corporate and Discount Codes",
    items: [
      "Marriott Hotels Corporate and Discount Codes Full List",
      "Consolidated list for the Hyatt, InterContinental and Marriott",
      "Marriott Hotels Corporate Rate Codes",
      "Marriott Hotels Discount Codes for AAA Members",
      "Hyatt Hotels Corporate Codes - Benefits and Eligibility",
      "Shanghai Marriott Hotels Corporate Rate 500 RMB Discount, with Stay+ and Breakfast Included",
      "Marriott Corporate Rate Codes: Ebreaks - Suitable for Domestic and International MEB, Recommended for Stays in Europe and 8 Other Regions",
      "Marriott Corporate Rate Codes: LPG Single Bed Discount, Suitable for Families",
      "Marriott Corporate Rate Codes: 'OXD' High School Students, All Rates Discounted with Guaranteed 400 Points",
      "Marriott Hotels Group's Main Corporate Rate Codes",
    ],
    articleCount: 5,
  },
  {
    title: "Best Western Hotels",
    slug: "best-western-hotels",
    description: "Best Western Hotels Corporate Codes",
    items: [
      "Hyatt Hotels Corporate Codes - Hilton Hotels",
      "Hyatt Hotels Corporate Codes - Wuhan",
      "Hyatt Hotels Corporate Codes - Shanghai",
      "Corporate Rate Entry for Wuhan Hilton Hotels 700 RMB/Night, with Breakfast and Lounge Access",
    ],
    articleCount: 1,
  },
  {
    title: "Hyatt Gold Passport",
    slug: "hyatt-gold-passport",
    description: "Hyatt Hotels Corporate Codes",
    items: [
      "Hyatt Hotels Corporate Codes - Hilton Hotels",
      "Hyatt Hotels Corporate Codes - Wuhan",
      "Hyatt Hotels Corporate Codes - Shanghai",
      "Corporate Rate Entry for Wuhan Hilton Hotels 700 RMB/Night, with Breakfast and Lounge Access",
    ],
    articleCount: 4,
  },
  {
    title: "Carlson Hotels",
    slug: "carlson-hotels",
    description: "Carlson Hotels Group's Main Corporate Rate Codes",
    items: ["Carlson Hotels Corporate Codes"],
    articleCount: 1,
  },
  {
    title: "Wyndham Hotels",
    slug: "wyndham-hotels",
    description: "Corporate Rate Entry for Wyndham Hotels Nationwide",
    items: ["Wyndham Hotels Group's Main Corporate Rate Codes", "Wyndham Hotels Corporate Rate Codes"],
    articleCount: 2,
  },
  {
    title: "Third-Party Booking Platforms",
    slug: "third-party-platforms",
    description: "Expedia Travel Rewards Program Helps You Save on Hotel Bookings",
    items: [
      "Expedia Travel Rewards Program Helps You Save on Hotel Bookings",
      "Agoda.com Discount Codes Help You Save on Hotel Bookings",
      "Good Subscription Hotels.Com Discount Codes: Stay 10 Nights Get 1 Free, Save 10% on 1 Night",
      "Hotels.com Discount Codes Help You Save on Hotel Bookings",
    ],
    articleCount: 4,
  },
]

export function CategorySection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Hotel Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{category.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{category.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {category.items.slice(0, 5).map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:text-foreground transition-colors">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href={`/category/${category.slug}`}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 group"
              >
                View all {category.articleCount} articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
