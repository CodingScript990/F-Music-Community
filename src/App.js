import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home";
import About from "./page/About";
import AddEdit from "./page/AddEdit";
import View from "./page/View";
import Header from "./components/Header";

function App() {
  return (
    // BrowserRouter
    <BrowserRouter>
      {/* Container */}
      <div className="Container">
        {/* Header */}
        <Header />
        {/* ToastContainer */}
        <ToastContainer />
        {/* Routes */}
        <Routes>
          {/* Route(Home) */}
          <Route path="/" element={<Home />} />
          {/* Route(AddEdit => user create) */}
          <Route path="/add" element={<AddEdit />} />
          {/* Route(AddEdit => user update) */}
          <Route path="/update/:id" element={<AddEdit />} />
          {/* Route(View => user search) */}
          <Route path="/view/:id" element={<View />} />
          {/* Route(About) */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
