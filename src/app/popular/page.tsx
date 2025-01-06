'use client'

import { useEffect, useState } from 'react';
import { tmdb } from '@/lib/tmdb';
import { MovieGrid } from '@/components/movie-grid';
import { FilterSidebar } from '@/components/filter-sidebar';
import { MovieDetails } from '@/types/movie';

export default function PopularMoviesPage() {
    const [movies, setMovies] = useState<MovieDetails[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const data = await tmdb.getPopularMovies(page);
                setMovies((prev) => [...prev, ...data.results]);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page]);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="min-h-screen pl-64 pt-16">
            <div className="flex">
                <FilterSidebar />
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-semibold mb-6">Popular Movies</h1>
                    <MovieGrid movies={movies} />
                    {!loading && (
                        <button
                            onClick={handleLoadMore}
                            className="w-full bg-blue-500 text-white py-2 mt-4"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

