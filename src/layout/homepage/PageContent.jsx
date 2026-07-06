import PromoSlider from "../../components/homepage/PromoSlider";
import Slider from "../../components/homepage/Slider";
import Categories from "./Categories";
import Products from "./Products";
import FeaturedSection from "../../components/homepage/FeaturedSection";
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