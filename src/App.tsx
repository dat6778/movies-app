import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "./components/layout/header";
import { Sidebar } from "./components/layout/sidebar";
import { Footer } from "./components/layout/footer";
import Home from "./app/page";
import PopularMovies from "./app/movies/page";
import MovieDetail from "./app/movie/[id]/page";

import './app/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1E2A]">
        <Header />
        <Sidebar />
        <main className="pl-[72px] pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
