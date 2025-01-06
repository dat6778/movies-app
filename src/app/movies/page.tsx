'use client'

import { useEffect, useState } from 'react';
import { tmdb } from '@/lib/tmdb';
import { MovieGrid } from '@/components/movie-grid';
import { FilterSidebar } from '@/components/filter-sidebar';
import type { Movie } from '@/types/movie';

export default function PopularMoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const data = await tmdb.getPopularMovies(1);
                setMovies(data.results);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="min-h-screen pl-64 pt-16">
            <div className="flex">
                <FilterSidebar />
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-semibold text-white mb-6">Popular Movies</h1>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <MovieGrid movies={movies} />
                    )}
                </div>
            </div>
        </div>
    );
} 