import "./CardsMovies.sass";
import useFetch from "../../hooks/useFetch";
import { IMAGE_PATH } from "../../utils/constants";
import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const CardsMovies = ({ url }) => {
  const cards = useFetch(url);
  const { results } = cards;
  return (
    <>
      {results ??
        results.map((movie) => (
          <Card
            key={movie.id}
            hoverable
            style={{ width: 240 }}
            cover={
              <img alt="example" src={`${IMAGE_PATH}${movie.logo_path}`} />
            }
          >
            <Meta title={movie.name} description={<PlusCircleOutlined />} />
          </Card>
        ))}
    </>
  );
};

export default CardsMovies;

const { Meta } = Card;
