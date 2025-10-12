import { CategorySection } from "@/components/category-section"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { SearchBanner } from "@/components/search-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-center">Hotel Corporate Codes</h1>
        </div>
      </header>

      <SearchBanner />

      {/* Main Content */}
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            {/* Left Column - Categories */}
            <CategorySection />

            {/* Right Column - Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
