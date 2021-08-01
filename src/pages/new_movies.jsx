import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import './secondary_page.sass';

const { Title } = Typography;

const NewMovies = () => {
  const url = `${URL_API}/movie/now_playing${API_KEY}&languaje=es-ES`;
  return (
    <>
      <Title className="page-title">Últimos Lanzamientos</Title>
      <CardsMovies url={url} />
    </>
  );
};

export default NewMovies;
