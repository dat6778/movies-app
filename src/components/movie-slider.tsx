'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MovieCard } from './movie-card'
import type { Movie } from '@/types/movie'

interface MovieSliderProps {
  movies: Movie[];
}

export function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-none w-[250px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <button
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

