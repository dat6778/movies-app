import { Movie } from '@/types/movie'
import { MovieCard } from '../movie-card'
import { Button } from '../ui/button'

interface MovieGridProps {
    movies: Movie[]
}

export function MovieGrid({ movies }: MovieGridProps) {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Button className="w-full bg-[#0096FF] text-white hover:bg-[#0096FF]/90">
                Load More
            </Button>
        </div>
    )
} 