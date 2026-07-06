import PromoSlider from "../components/PromoSlider";
import Slider from "../components/Slider";
import Categories from "./Categories";
import Products from "./Products";
import FeaturedSection from "../components/FeaturedSection";
import FeaturedPosts from "./FeaturedPosts";

const PageContent = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <PromoSlider />
            <FeaturedSection />
            <FeaturedPosts />
        </>
    );
};

export default PageContent;