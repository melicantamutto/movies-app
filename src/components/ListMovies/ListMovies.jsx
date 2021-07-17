import "./ListMovies.sass";
import Loading from "../Loading";

import { Link } from "react-router-dom";
import { List, Avatar, Button } from "antd";
import {RightOutlined} from '@ant-design/icons';

const ListMovies = ({ title, moviesData }) => {
  if (moviesData.Loading || !moviesData.result) {
    return <Loading />;
  }

  return (
    <List
      className="list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={moviesData.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    ></List>
  );
};

const RenderMovie = ({ movie: { id, title, poster_path: posterPath } }) => {
  return (
    <List.Item className="list__item">
      <List.Item.Meta
        avatar={
          <Avatar src={`https://image.tmdb.org/t/p/original${posterPath}`} />
        }
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  );
};

export default ListMovies;
