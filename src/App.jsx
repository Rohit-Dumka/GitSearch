import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppFooter from './Components/AppFooter/AppFooter';
import AppHeader from './Components/AppHeader/AppHeader';
import AppHome from './Components/AppHome/AppHome';
import User from './Components/User/User';
import RepoList from './Components/RepoList/RepoList';
import Repo from './Components/RepoList/Repo/Repo';
import RepoContent from './Components/RepoList/Repo/Content/RepoContent';
import RepoFile from './Components/RepoList/Repo/Content/File/RepoFile';
import GistList from './Components/GistList/GistList';
import GistFileList from './Components/GistList/File/GistFileList';
import GistFile from './Components/GistList/File/GistFile';
import FollowerList from './Components/FollowerList';
import FollowingList from './Components/FollowingList';
import Location from './Components/Location/Location';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const App = () => (
  <Container className="App">
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<AppHome />} exact />
        <Route path="/:login" element={<User />}>
          <Route path="repos" element={<RepoList />} />
          <Route path="repos/:name" element={<Repo />}>
            <Route path="content" element={<RepoContent />} />
            <Route path="file/:filePath" element={<RepoFile />} />
          </Route>
          <Route path="gists" element={<GistList />} />
          <Route path="gists/:id" element={<GistFileList />} >
            <Route path=":name" element={<GistFile />} />
          </Route>
          <Route path="followers" element={<FollowerList />} />
          <Route path="following" element={<FollowingList />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
      <AppFooter />
    </Router>
  </Container>
);

export default App;