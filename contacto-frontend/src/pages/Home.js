import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Working from "../components/Working";
import ServicesHome from "../components/ServicesHome";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Working />
            <ServicesHome />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home;