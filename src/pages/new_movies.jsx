import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import CardsMovies from "../components/CardsMovies/CardsMovies";

const { Title } = Typography;

const NewMovies = () => {
  const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&languaje=es-ES`;
  return (
    <>
      <Title>Últimos Lanzamientos</Title>
      <CardsMovies url={url} />
    </>
  );
};

export default NewMovies;
