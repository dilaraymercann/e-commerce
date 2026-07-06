import PromoSlider from "../components/PromoSlider";
import Slider from "../components/Slider";
import Categories from "./Categories";
import Products from "./Products";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedPosts from "./FeaturedPosts";
import Footer from "./Footer";

const PageContent = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <PromoSlider />
            <FeaturedSection />
            <FeaturedPosts />
            <Footer />
        </>
    );
};

export default PageContent;