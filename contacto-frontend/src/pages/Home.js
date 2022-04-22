import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Working from "../components/Working";
import ServicesHome from "../components/ServicesHome";
import Testimonial from "../components/Testimonial";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Working />
            <ServicesHome />
            <Testimonial />
            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    )
}

export default Home;