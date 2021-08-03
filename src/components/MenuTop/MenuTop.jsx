import "./MenuTop.sass";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/popcorn_m.png";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <img src={logo} alt="popcorn" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{lineHeight:"64px"}}
      >
          <Menu.Item key="1" className="menu-top__item">
              <Link to="/movies-app">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" className="menu-top__item">
              <Link to="/new-movies">Películas nuevas</Link>
          </Menu.Item>
          <Menu.Item key="3" className="menu-top__item">
              <Link to="/popular">Más populares</Link>
          </Menu.Item>
          <Menu.Item key="4" className="menu-top__item">
              <Link to="/search">Buscar</Link>
          </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuTop;
