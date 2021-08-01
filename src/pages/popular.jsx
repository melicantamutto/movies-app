import { URL_API, API_KEY } from "../utils/constants";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import { Typography } from "antd";
import './secondary_page.sass';
const { Title } = Typography;


const Popular = () => {
  const url = `${URL_API}/movie/popular${API_KEY}&languaje=es-ES`;
  return (
    <>
      <Title className="page-title">Películas Populares</Title>
      <CardsMovies url={url} />
    </>
  );
};

export default Popular;
