import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'

export default function MovieNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold text-[#FCFEFF]">Movie Not Found</h1>
      <p className="text-[#FCFEFF]/70 text-center max-w-md">
        We couldn't find the movie you're looking for. It might have been removed or doesn't exist.
      </p>
      <Link to="/">
        <Button
          className="bg-[#FFB43A] text-[#FCFEFF] hover:bg-[#FFB43A]/90"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

