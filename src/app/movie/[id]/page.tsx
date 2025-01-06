'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tmdb } from '@/lib/tmdb';
import { Play } from 'lucide-react';

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  release_date: string;
}

interface Credits {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string;
  }[];
}

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const [movieData, creditsData] = await Promise.all([
          tmdb.getMovieDetails(id!),
          tmdb.getMovieCredits(id!)
        ]);
        setMovie(movieData);
        setCredits(creditsData);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      }
    };

    if (id) {
      fetchMovieData();
    }
  }, [id]);

  if (!movie || !credits) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#1E1E2A] text-[#FCFEFF]">
      {/* Banner */}
      <div className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tmdb.getImageUrl(movie.backdrop_path, 'original')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative h-full max-w-screen-xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-6xl font-bold">{movie.title}</h1>
              <span className="px-3 py-1 bg-[#FFB43A] rounded-full text-sm">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1 bg-transparent border border-white/20 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-2 bg-[#FFB43A] text-white px-6 py-3 rounded-full hover:bg-[#FFB43A]/90">
              <Play className="w-5 h-5" />
              Watch the trailer
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* About Movie */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Movie</h2>
          <p className="text-white/70 max-w-3xl leading-relaxed">
            {movie.overview}
          </p>
        </section>

        {/* Cast */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Movie Cast</h2>
          <div className="grid grid-cols-6 gap-8">
            {credits.cast.slice(0, 6).map((actor) => (
              <div key={actor.id} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-3">
                  <img
                    src={tmdb.getImageUrl(actor.profile_path, 'w500')}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium mb-1">{actor.name}</h3>
                <p className="text-sm text-white/70">{actor.character}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Download</h2>
          <div className="flex justify-center gap-4">
            {['480p', '720p', '1080p'].map((quality) => (
              <button
                key={quality}
                className="bg-[#FFB43A] text-white px-8 py-2 rounded-full hover:bg-[#FFB43A]/90"
              >
                {quality}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

