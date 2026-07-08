import Footer from "../layout/main/Footer";
import Header from "../layout/main/Header";
import BrandLogos from "../layout/shop/BrandLogos";
import ProductDetail from "../layout/productdetail/ProductDetail";
import BestsellerProducts from "../layout/productdetail/BestsellerProducts";

const ProductDetailPage = () => {
    return (
        <>
            <Header />
            <ProductDetail />
            <BestsellerProducts />
            <BrandLogos />
            <Footer />
        </>
    );
};

export default ProductDetailPage;