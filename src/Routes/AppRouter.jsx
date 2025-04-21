import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
import Home from '../Components/Home';
import Profile from '../Components/Profile';

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        {/* Cambié la ruta raíz para que apunte al componente Home */}
        <Route path="/" element={<Home />} />
        {/* Aquí mantuve el LoginForm en la ruta '/login' */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;


