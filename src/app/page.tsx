'use client'

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { tmdb } from '@/lib/tmdb';
import { MovieCard } from '@/components/movie-card';
import { HeroBanner } from '@/components/hero-banner';
import type { Movie } from '@/types/movie';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularData, nowPlayingData] = await Promise.all([
          tmdb.getPopularMovies(),
          tmdb.getNowPlayingMovies()
        ]);

        setFeaturedMovie(popularData.results[0]);
        setPopularMovies(popularData.results.slice(1));
        setNowPlayingMovies(nowPlayingData.results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E2A]">
      {featuredMovie && (
        <HeroBanner
          title={featuredMovie.title}
          overview={featuredMovie.overview}
          backgroundImage={tmdb.getImageUrl(featuredMovie.backdrop_path, 'original')}
          releaseDate={new Date(featuredMovie.release_date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long'
          })}
        />
      )}

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Popular Movies</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {popularMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Now Playing</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {nowPlayingMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}

