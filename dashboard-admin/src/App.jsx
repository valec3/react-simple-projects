import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
