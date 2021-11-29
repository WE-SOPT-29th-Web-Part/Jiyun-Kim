import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/write' element={<Write />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/article/edit/:id" element={<Write />} />
        <Route path='/*' element={<Home />} />
        <Route element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
