'use client'

import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tmdb } from '@/lib/tmdb'
import type { Movie } from '@/types/movie'

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
        <img
          src={tmdb.getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 px-2 py-1 bg-[#FFB43A] text-xs text-white rounded">
          {movie.vote_average.toFixed(1)}
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
            <button className="flex items-center gap-2 bg-[#FFB43A] text-white px-4 py-2 rounded-full">
              <Play className="w-4 h-4" />
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

