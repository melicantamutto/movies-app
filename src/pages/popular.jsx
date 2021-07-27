import { URL_API, API_KEY } from "../utils/constants";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import { Typography } from "antd";
const { Title } = Typography;

const Popular = () => {
  const url = `${URL_API}/movie/popular?api_key=${API_KEY}&languaje=es-ES`;
  return (
    <>
      <Title>Películas Populares</Title>
      <CardsMovies url={url} />
    </>
  );
};

export default Popular;
