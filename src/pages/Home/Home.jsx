import Banner from "../../components/Banner/Banner";
import Customer from "../../components/Customer/Customer";
import Gallary from "../../components/Gallary/Gallary";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <>
           <Banner/> 
           <Services/>
           <Customer/>
           <Gallary/>
        </>
    );
};

export default Home;