import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBanner() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left side - Text */}
          <div className="flex-shrink-0 lg:max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
              DON'T FIND WHAT YOU'RE LOOKING FOR? SEARCH POSTS HERE.
            </h2>
          </div>

          {/* Right side - Search */}
          <div className="flex-1 w-full lg:w-auto flex gap-2">
            <Input
              type="text"
              placeholder="Optional placeholder..."
              className="flex-1 bg-white text-black border-0 h-12"
            />
            <Button className="bg-white hover:bg-gray-100 text-black px-8 h-12 font-medium">Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
