
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import NewArrivals from '../components/NewArrivals.jsx';
import TopSelling from '../components/TopSelling.jsx';
import BrowseBy from '../components/BrowseBy.jsx';

function HomePage() {



    return (
        <>
            <NavBar />
            <Header />
            <NewArrivals />
            <TopSelling />
            <BrowseBy />
            <Footer />

        </>
    )
}
export default HomePage;