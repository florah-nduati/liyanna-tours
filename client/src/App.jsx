import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import TourPackages from "./pages/tourPackages/tourPackage";
import TourDetails from "./pages/tourDetails/tourDetails";
import Booking from "./pages/booking/booking";
import About from "./pages/aboutUs/about";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact/contact";
import FAQs from "./pages/faq/faq";
import Blog from "./pages/blog/blog";
import SingleBlog from "./pages/singleBlogPost/singleBlog";
import ThankYou from "./components/thank/thankYou";
import Protected from "./components/protected/protected";
import Footer from "./components/footer/footer";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign up" element={<SignUp />} />

            <Route
              path="/packages"
              element={
                <Protected>
                  <TourPackages />
                </Protected>
              }
            />
            <Route
              path="/tour/:id"
              element={
                <Protected>
                  <TourDetails />
                </Protected>
              }
            />
            <Route
              path="/booking"
              element={
                <Protected>
                  <Booking />
                </Protected>
              }
            />
            <Route
              path="/about"
              element={
                <Protected>
                  <About />
                </Protected>
              }
            />
            <Route
              path="/gallery"
              element={
                <Protected>
                  <Gallery />
                </Protected>
              }
            />
            <Route
              path="/contact"
              element={
                <Protected>
                  <Contact />
                </Protected>
              }
            />
            <Route
              path="/faqs"
              element={
                <Protected>
                  <FAQs />
                </Protected>
              }
            />
            <Route
              path="/blog"
              element={
                <Protected>
                  <Blog />
                </Protected>
              }
            />
            <Route
              path="/thank-you"
              element={
                <Protected>
                  <ThankYou />
                </Protected>
              }
            />
            <Route
              path="/blog/:postId"
              element={
                <Protected>
                  <SingleBlog />
                </Protected>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
