import { getQuery } from '../API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = searchParams;
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newQuery = form.elements.query.value;
    if (newQuery !== '') {
      try {
        const fetchedMovies = await getQuery(newQuery);
        setSearchedMovie(fetchedMovies);
        setSearchParams({ query: newQuery });
      } catch (error) {
        console.error('Ha ocurrido un error: ', error);
      }
    } else {
      setSearchParams({});
      setSearchedMovie([]);
    }
    form.reset();
  };

  useEffect(() => {
    if (query) {
      getQuery(query).then(setSearchedMovie);
    } else {
      setSearchedMovie([]);
    }
  }, [query]);

  return (
    <form className='formSearch' onSubmit={handleSubmit}>
      <input type="text" name="query" defaultValue={query || ''} />
      <button className='btnSearch'type="submit">Search</button>
      {movies.length === 0 && query ? (
        <div>No results. Please try again.</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Movies;