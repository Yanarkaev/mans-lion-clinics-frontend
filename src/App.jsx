import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import SignUp from "./components/Authorization/SignUp/SignUp";
import AboutPage from "./pages/About/AboutPage";
import Departments from "./pages/Departments/Departments";
import SignIn from "./components/Authorization/SignIn/SignIn";
import Sad from "./components/Authorization/Sad/Sad";
import SignUpWorker from "./components/Authorization/SignUpWorker/SignUpWorker";
import SingleDoctor from "./pages/SingleDoctor/SingleDoctor";
import ContactsPage from "./pages/Contacts/ContactsPage";
import Account from "./pages/PersonalAccounts/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/worker" element={<SignUpWorker />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/entry" element={<Departments />} />
        <Route path="/entry/doctor/:id" element={<SingleDoctor />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
export default App;
