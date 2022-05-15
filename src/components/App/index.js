import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { route } from '../../Env';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ route.index } element={<Landing />} />
          <Route path={ route.landing } element={<Landing />} />
          <Route path={ route.welcome } element={<Welcome />} />
          <Route path={ route.login } element={<Login />} />
          <Route path={ route.signup } element={<Signup />} />
          <Route path={ route._invalidURL } element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
