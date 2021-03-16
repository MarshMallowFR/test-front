import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import PhotosByAlbum from "./components/PhotoByAlbum";
import { Home } from "./views/Home";
import { Users } from "./views/Users";
import { DisplayAPhoto } from "./components/DisplayAPhoto";
import { usePhotos } from "./api/photosApi";

import { Flex } from "./styles/FlexDiv";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Header = styled.header`
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #33ad73;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
  & > a {
    margin-right: 20px;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const NavLink = styled.li`
  margin-right: 12px;
`;

function App() {
  const [limit, setLimit] = useState(25);
  const { loading, data: photos, error } = usePhotos();

  return (
    <div className="App">
      <Main>
        <Router>
          <Header>
            <Flex>
              <DisplayAPhoto photoUrl={photos[0]?.url} />
              <nav style={{ display: "flex" }}>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
                <NavLink>
                  <Link to="/photos-by-album">Photos by Album</Link>
                </NavLink>
                <NavLink>
                  <Link to="/users">Users</Link>
                </NavLink>
              </nav>
            </Flex>
          </Header>

          <Content>
            <Switch>
              <Route path="/photos-by-album">
                <PhotosByAlbum
                  limit={limit}
                  setLimit={setLimit}
                  photos={photos}
                />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                {loading ? (
                  <div>Loading</div>
                ) : error ? (
                  <div>Error</div>
                ) : (
                  <Home setLimit={setLimit} limit={limit} photos={photos} />
                )}
              </Route>
            </Switch>
          </Content>

          <footer>Ceci est le footer</footer>
        </Router>
      </Main>
    </div>
  );
}

export default App;
