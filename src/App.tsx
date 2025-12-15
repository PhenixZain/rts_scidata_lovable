import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Research from "./pages/Research/Research";
import Blog from "./pages/Blog/Blog";
import BlogPostPage from "./pages/Blog/BlogPostPage";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import DataConfidentiality from "./pages/Legal/DataConfidentiality";
import "./styles/global.scss";

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/data-confidentiality" element={<DataConfidentiality />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
