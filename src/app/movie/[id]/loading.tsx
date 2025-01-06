import { Skeleton } from "@/components/ui/skeleton"

export default function MovieDetailLoading() {
  return (
    <div className="min-h-screen pb-8">
      <div className="relative h-[600px]">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 mt-8">
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-20 w-full" />
        </div>

        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(6).fill(null).map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="aspect-square rounded-full mb-2" />
                <Skeleton className="h-4 w-20 mx-auto mb-1" />
                <Skeleton className="h-4 w-16 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="flex gap-4">
            {Array(3).fill(null).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

