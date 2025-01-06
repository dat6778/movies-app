import { Movie } from '@/types/movie'
import { MovieCard } from './movie-card'

interface MovieGridProps {
  movies: Movie[]
}

export function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <button className="col-span-full bg-blue-500 text-white py-2 mt-4">
        Load More
      </button>
    </div>
  )
}

