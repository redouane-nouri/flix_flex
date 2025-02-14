import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/favorites";
import LoginPage from "./pages/login";
import MovieDetails from "./pages/movie_details";
import MoviesPage from "./pages/movies";
import RegisterPage from "./pages/register";
import SearchPage from "./pages/search";
import TVPage from "./pages/tv";
import TVDetails from "./pages/tv_details";
import ProtectedRoutes from "./components/protected_routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/tv/:id" element={<TVDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
