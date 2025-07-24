import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import TypingTest from "../Pages/TypingTest";
import Results from "../Pages/Results";
import About from "../Pages/About";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/typing-assessment" element={<TypingTest />} />
      <Route path="/result" element={<Results />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoute;
