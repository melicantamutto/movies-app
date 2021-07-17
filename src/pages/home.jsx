// Inside app imports
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import ListMovies from "../components/ListMovies";
import { URL_API, API_KEY } from "../utils/constants";
// Style imports
import { Row, Col } from 'antd'



const Home = () => {
  const urlNewMovies = `${URL_API}/movie/now_playing${API_KEY}&language=es-ES&page=1`;
  const popularNewMovies = `${URL_API}/movie/popular${API_KEY}&language=es-ES&page=1`;
  const recommendedNewMovies = `${URL_API}/movie/top_rated${API_KEY}&language=es-ES&page=1`;
  const newMoviesData = useFetch(urlNewMovies);
  const popularMoviesData = useFetch(popularNewMovies);
  const recommendedMoviesData = useFetch(recommendedNewMovies);

  return (
    <div>
      <SliderMovies moviesData={newMoviesData} />
      <Row>
        <Col span={12}>
          <ListMovies title="Peliculas Populares" moviesData={popularMoviesData} />
        </Col>
        <Col span={12}>
        <ListMovies title="Peliculas Mejor Puntadas" moviesData={recommendedMoviesData} />
        </Col>
      </Row>

    </div>
  );
};

export default Home;




