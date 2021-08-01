import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import './secondary_page.sass';

const { Title } = Typography;

const NewMovies = () => {
  const url = `${URL_API}/movie/now_playing${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title className="__title">Últimos Lanzamientos</Title>
      <CardsMovies url={url} />
    </div>
  );
};

export default NewMovies;
