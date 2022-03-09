import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home";
import Join from "./page/Join/Join";
import Login from "./page/Login/Login";
import View from "./page/View";
import Header from "./components/Header";

function App() {
  return (
    // BrowserRouter
    <BrowserRouter>
      {/* Container */}
      {/* Header */}
      <Header />
      {/* ToastContainer */}
      <ToastContainer />
      {/* Routes */}
      <Routes>
        {/* Route(Home) */}
        <Route path="/" element={<Home />} />
        {/* Route(Login => user create) */}
        <Route path="/login" element={<Login />} />
        {/* Route(Login => user update) */}
        <Route path="/update/:id" element={<Login />} />
        {/* Route(View => user search) */}
        <Route path="/view/:id" element={<View />} />
        {/* Route(Join) */}
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
