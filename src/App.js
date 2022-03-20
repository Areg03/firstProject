import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './commponents/footer/Footer';
import AboutMeContainer from './commponents/content/aboutme/AboutMeContainer';
import Main from './commponents/content/main/Main';
import Nav from './commponents/nav/Nav';
import UsersContainer from './commponents/content/users/usersContainer';
import HeaderContainer from './commponents/header/headerContainer';
import Login from './commponents/content/login/login';
import{ lazy, Suspense } from 'react';
import Preloader from './assets/Preloader';

const ProfilesContainer = lazy(() => import('./commponents/content/profiles/ProfilesContainer'))


function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <HeaderContainer />
        <Nav />
        <Footer />
        <Suspense fallback={<Preloader />} >
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/profiles/*' element={<ProfilesContainer />} />
          <Route path='/profiles/:userId' element={<ProfilesContainer />} />
          <Route path='/aboutme' element={<AboutMeContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/authorized' element={<Login />} />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}


export default App;

