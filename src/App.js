import { Routes, Route } from "react-router-dom"; //3 - 5 Routing(2)
import AboutPage from  './pages/About';
import CocktailPage from './extraPages/Cocktail';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import OffersPage from './pages/Offers';
import NavBar from "./pages/Nav";
import FooterSection from "./pages/Footer";
import DrinksMenuPage from "./extraPages/DrinkMenuPg/DrinkMenuPage"
import DessertsMenuPage from "./extraPages/DessertsMenuPg/DessertsMenuPage";
import LunchPage from "./extraPages/LunchMenu";
import VenuePage from "./extraPages/BottomMenu/VenueHirePg";
import JobsPage from "./extraPages/BottomMenu/Jobspg";
import DeliveryPage from "./extraPages/BottomMenu/FoodDeliverypg";
import ChristmasPage from "./extraPages/BottomMenu/ChristmasParty";
import PrivacyComponent from "./extraPages/PrivacyPg";
import TermsComponent from "./extraPages/TermsPg";
import {Helmet} from "react-helmet";

function App() {
  return <div>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Dos Sombreros - Mexican restaurant</title>
      <link rel="canonical" href="https://dossombreros.co.uk/" />
      <meta name="description" content="Dos Sombreros" />
    </Helmet>

    <Routes>  {/*4 - 5 Routing(2) */}
      <Route path='/' element={<NavBar />} >
        <Route path='/' element={<FooterSection />} >
          <Route index element={<HomePage/>} />
          <Route path='mexican-brighton' element={<AboutPage/>}/>{/*5 - 5 Routing(2) */}
          <Route path='menus' element={<MenuPage/>}/>
          <Route path='drinks-food-offers' element={<OffersPage/>}/>
          <Route path='gallery' element={<GalleryPage/>} />
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='cocktail-bar' element={<CocktailPage/>} />
          <Route path='drink-menu' element={<DrinksMenuPage/>} />
          <Route path='lunch-menu' element={<MenuPage/>} />
          <Route path='brighton-venue-hire' element={<VenuePage/>} />
          <Route path='restuarant-jobs-brighton' element={<JobsPage/>} />
          <Route path='food-delivery-brighton' element={<DeliveryPage/>} />
          <Route path='christmas-party-brighton' element={<ChristmasPage/>} />
          <Route path='privacy-policy' element={<PrivacyComponent/>} />
          <Route path='website-terms' element={<TermsComponent/>} />
        </Route>
      </Route>
    </Routes> 
  </div>;
}
export default App;
