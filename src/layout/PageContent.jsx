import PromoSlider from "../components/PromoSlider";
import Slider from "../components/Slider";
import Categories from "./Categories";
import Products from "./Products";

const PageContent = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <PromoSlider />
        </>
    );
};

export default PageContent;