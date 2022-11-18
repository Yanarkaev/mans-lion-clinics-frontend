import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import SignUp from "./components/Authorization/SignUp/SignUp";
import AboutPage from "./pages/About/AboutPage";
import SingleDoctor from './pages/SingleDoctor/SingleDoctor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/entry" element={<SingleDoctor />} />
      </Route>
    </Routes>
  );
}

export default App;
