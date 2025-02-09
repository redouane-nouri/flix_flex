import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/favorites";
import LoginPage from "./pages/login";
import MoviesPage from "./pages/movies";
import RegisterPage from "./pages/register";
import TvPage from "./pages/tv";
import SearchPage from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
