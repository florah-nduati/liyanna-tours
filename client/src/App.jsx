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
            <Route path="/sign-up" element={<SignUp />} />

            {/* No authentication required for the following routes */}
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog/:postId" element={<SingleBlog />} />

            <Route
              path="/booking"
              element={
                <Protected>
                  <Booking />
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
