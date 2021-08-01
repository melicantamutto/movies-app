// Importing STYLES
import './App.less';

// Importing LIBRARIES
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing PAGES
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import NewMovies from "./pages/new_movies";

// Importing COMPONENTS
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";

const App = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{zIndex: '1'}}>
          <MenuTop></MenuTop>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/new-movies" component={NewMovies} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Footer style={{zIndex: '1'}} />
      </Router>
    </Layout>
  );
};

export default App;
