import PromoSlider from "../components/PromoSlider";
import Slider from "../components/Slider";
import Categories from "./Categories";
import Products from "./Products";
import FeaturedSection from "../components/FeaturedSection";

const PageContent = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <PromoSlider />
            <FeaturedSection />
        </>
    );
};

export default PageContent;