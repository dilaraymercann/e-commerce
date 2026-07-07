import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
import ShopHeader from "../layout/shop/ShopHeader";
import ShopProducts from "../layout/shop/ShopProducts";
import BrandLogos from "../layout/shop/BrandLogos";

const ShopPage = () => {
    return (
        <>
            <Header />
            <ShopHeader />
            <ShopProducts />
            <BrandLogos />
            <Footer />
        </>
    );
};

export default ShopPage;