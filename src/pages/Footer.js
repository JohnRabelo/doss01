import footercl from './Footer.module.css'
import { Outlet, Link } from 'react-router-dom';
import footerLogo from '../assets/images/dsPhotos/banner/footer.JPG'

function FooterSection(){
    return <div>
        <Outlet />
        <div className={footercl.footerGeneral}>
            <div className={footercl.ft}>
                <img src={footerLogo} alt=''/>
            </div>

            <p className={footercl.dsName}>DOS SOMBREROS ©2023</p>
            <div className={footercl.bottomMenuContainer}>
                <ul>
                    <Link to='/'><li> <span>|</span> Home</li></Link> 
                    <Link to='/mexican-brighton'><li> <span>|</span> About</li></Link>
                    <Link to='christmas-party-brighton'><li> <span>|</span> Christmas Party</li></Link>
                    {/*<Link to='cocktail-bar'><li> <span>|</span> Cocktail Bar</li></Link>*/}
                    <Link to='drinks-food-offers'><li> <span>|</span> Food Offers</li></Link>
                    <Link to='menus'><li> <span>|</span> Food Menu</li></Link>
                    <Link to='food-delivery-brighton'><li> <span>|</span> Food Delivery</li></Link>
                    <Link to='restuarant-jobs-brighton'><li> <span>|</span> Jobs</li></Link>
                    <Link to='brighton-venue-hire'><li> <span>|</span> Venue Hire</li></Link>
                </ul>

            </div>

        </div>

    </div>;
}

export default FooterSection;