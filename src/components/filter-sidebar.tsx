'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
    'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
    'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
]

const certifications = ['G', 'PG', 'PG-13', 'R', 'NC-17']

export function FilterSidebar() {
    const [userScore, setUserScore] = useState([0, 10])
    const [runtime, setRuntime] = useState([0, 400])
    const [votes, setVotes] = useState([0, 500])
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')

    return (
        <div className="fixed left-[72px] top-16 w-64 h-[calc(100vh-4rem)] bg-[#1E1E2A] p-6 overflow-y-auto border-r border-white/10">
            {/* Sort */}
            <div className="mb-6">
                <button className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg text-[#FCFEFF] hover:bg-white/10">
                    <span>Sort</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Where To Watch */}
            <div className="mb-6">
                <button className="w-full flex items-center justify-between p-3 bg-white/5 rounded-lg text-[#FCFEFF] hover:bg-white/10">
                    <span>Where To Watch</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm bg-white/10 px-2 py-0.5 rounded">190</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </button>
            </div>

            {/* Show Me */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Show Me</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[#FCFEFF]/70">
                        <Checkbox /> Everything
                    </label>
                    <label className="flex items-center gap-2 text-[#FCFEFF]/70">
                        <Checkbox /> Movies I Haven't Seen
                    </label>
                    <label className="flex items-center gap-2 text-[#FCFEFF]/70">
                        <Checkbox /> Movies I Have Seen
                    </label>
                </div>
            </div>

            {/* Release Dates */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Release Dates</h3>
                <div className="space-y-2">
                    <Input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="w-full bg-white/5 border-white/10 text-[#FCFEFF]"
                    />
                    <Input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="w-full bg-white/5 border-white/10 text-[#FCFEFF]"
                    />
                </div>
            </div>

            {/* Genres */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            className="px-3 py-1 bg-white/5 text-[#FCFEFF]/70 text-sm rounded-full hover:bg-white/10"
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            {/* Certification */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Certification</h3>
                <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                        <button
                            key={cert}
                            className="px-3 py-1 bg-white/5 text-[#FCFEFF]/70 text-sm rounded-full hover:bg-white/10"
                        >
                            {cert}
                        </button>
                    ))}
                </div>
            </div>

            {/* User Score */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">User Score</h3>
                <Slider
                    value={userScore}
                    onValueChange={setUserScore}
                    max={10}
                    step={0.1}
                    className="my-4"
                />
                <div className="flex justify-between text-sm text-[#FCFEFF]/70">
                    <span>{userScore[0]}</span>
                    <span>{userScore[1]}</span>
                </div>
            </div>

            {/* Minimum User Votes */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Minimum User Votes</h3>
                <Slider
                    value={votes}
                    onValueChange={setVotes}
                    max={500}
                    step={50}
                    className="my-4"
                />
                <div className="flex justify-between text-sm text-[#FCFEFF]/70">
                    <span>{votes[0]}</span>
                    <span>{votes[1]}</span>
                </div>
            </div>

            {/* Runtime */}
            <div className="mb-6">
                <h3 className="text-[#FCFEFF] font-medium mb-3">Runtime</h3>
                <Slider
                    value={runtime}
                    onValueChange={setRuntime}
                    max={400}
                    step={15}
                    className="my-4"
                />
                <div className="flex justify-between text-sm text-[#FCFEFF]/70">
                    <span>{runtime[0]}min</span>
                    <span>{runtime[1]}min</span>
                </div>
            </div>

            {/* Keywords */}
            <div>
                <h3 className="text-[#FCFEFF] font-medium mb-3">Keywords</h3>
                <Input
                    placeholder="Filter by keywords..."
                    className="w-full bg-white/5 border-white/10 text-[#FCFEFF]"
                />
            </div>
        </div>
    )
}

