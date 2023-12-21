import ClientSection from "../Client/ClientSection";
import FaqSection from "../Faq/FaqSection";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientSection></ClientSection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;