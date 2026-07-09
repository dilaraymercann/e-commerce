import TeamSection from "../layout/about/TeamSection";
import AboutHeader from "../layout/about/AboutHeader";
import Footer from "../layout/main/Footer";
import Header from "../layout/main/Header";
import Stats from "../layout/about/Stats";
import VideoSection from "../layout/about/VideoSection";
import CompanySection from "../layout/about/CompanySection";
import WorkWithUs from "../layout/about/WorkWithUs";

const About = () => {
    return (
        <div>
            <Header />
            <AboutHeader />
            <Stats />
            <VideoSection />
            <TeamSection />
            <CompanySection />
            <WorkWithUs />
            <Footer />
        </div>
    );
};

export default About;