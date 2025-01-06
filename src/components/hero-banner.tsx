'use client'

import { Play } from 'lucide-react'

interface HeroBannerProps {
  title: string;
  backgroundImage: string;
  releaseDate: string;
  overview: string;
}

export function HeroBanner({ title, backgroundImage, releaseDate }: HeroBannerProps) {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="relative h-full max-w-screen-xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-[#FFB43A] text-xl mb-6">Releasing {releaseDate}</p>
          <button className="inline-flex items-center gap-3 bg-[#FFB43A] text-white px-6 py-3 rounded-full hover:bg-[#FFB43A]/90 transition-colors">
            <Play className="w-6 h-6" />
            <span className="font-medium">Watch the trailer</span>
          </button>
        </div>
      </div>
    </div>
  );
}

