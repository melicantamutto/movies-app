import { Typography } from "antd";
import './secondary_page.sass';
import errorImg from '../assets/13236.jpg'

const { Title } = Typography;

const Error404 = () => {
  return (
    <div className="page error-page">
      <Title className="__title">ERROR 404</Title>
      <figure>
        <img src={errorImg} alt="People filimg a movie" />
      </figure>

    </div>
  );
}

export default Error404;
