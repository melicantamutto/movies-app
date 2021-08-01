import { URL_API, API_KEY } from "../utils/constants";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import { Typography } from "antd";
import './secondary_page.sass';
const { Title } = Typography;


const Popular = () => {
  const url = `${URL_API}/movie/popular${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title className="__title">Películas Populares</Title>
      <CardsMovies url={url} />
    </div>
  );
};

export default Popular;
