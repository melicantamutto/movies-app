import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API_KEY } from "../utils/constants";

const Home = () => {
  const url = `${URL_API}/movie/now_playing${API_KEY}&language=es-ES&page=1`;
  const newMoviesData = useFetch(url);

  return (
    <div>
      <SliderMovies newMoviesData={newMoviesData} />
      {newMoviesData.loading && <Loading />}
    </div>
  );
};

export default Home;
