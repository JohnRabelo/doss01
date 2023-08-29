import lunchcl from './LunchMenu.module.css'
import mainMenu from '../assets/images/dsPhotos/icons/menus/mainMenu.JPG'
import lunch from '../assets/images/dsPhotos/icons/menus/lunch.JPG'
import drinks from '../assets/images/dsPhotos/icons/menus/drinks.JPG'
import desserts from '../assets/images/dsPhotos/icons/menus/desserts.JPG'
import { NavLink } from 'react-router-dom'

function LunchPage(){
    return <div>

        <div className={lunchcl.menus}>
            <div className={lunchcl.menuButtom}>
                <NavLink to='/menus'><a className={lunchcl.menusImg} href='' target='_blank'><img src={mainMenu} alt=""/></a></NavLink>
            </div>
            <div className={lunchcl.menuButtom}>
                <NavLink to='/lunch-menu'><a className={lunchcl.menusImg} href='' target='_blank'><img src={lunch} alt=""/></a></NavLink>
            </div>
            <div className={lunchcl.menuButtom}>
                <NavLink to='/drink-menu'><a className={lunchcl.menusImg} href='' target='_blank'><img src={drinks} alt=""/></a></NavLink>
            </div>
            <div className={lunchcl.menuButtom}>
                <NavLink to='/desserts-menu'><a className={lunchcl.menusImg} href='' target='_blank'><img src={desserts} alt=""/></a></NavLink>
            </div>
        </div>

        
        <div className={lunchcl.lnchOrganizer}>
            <div className={lunchcl.lnchBannerContainer}>
                <p>LUNCH MENU SERVED BETWEEN 12PM AND 3PM SUNDAY – FRIDAY. SET MENU , TWO COURSE £9.50 PER PERSON.</p>
            </div>
            <div>
                <div className={lunchcl.lnchSectionTitle}>
                    <p>STARTERS</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>NACHOS FOR ONE (GF, V)</p>
                    <p className={lunchcl.lnchDescription}>TORTILLA CHIPS WITH HOMEMADE SALSA, HOMEMADE GUACAMOLE, SOUR CREAM, CHILLI CON QUESO AND JALEPEÑOS</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>TAQUITOS</p>
                    <p className={lunchcl.lnchDescription}>TWO TORTILLAS FILLED WITH CHICKEN AND DEEP FRIED FOR A CRISPY CRUNCH or SERVED WITH SALSA,
                     GUACAMOLE AND SOUR CREAM or TWO TORTILLAS FILLED WITH SWEET POTATO & FETA CHEESE , DEEP FRIED FOR A CRISPY CRUNCH, SERVED WITH SALSA, GUACAMOLE & SOUR CREAM” (v)</p>
                </div>
            </div>
            <div>
                <div className={lunchcl.lnchSectionTitle}>
                    <p>MAINS</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>BURRITOS</p>
                    <p className={lunchcl.lnchDescription}>A 10″ TORTILLA SERVED WITH REFRIED BEANS, RICE, CHEESE AND YOUR CHOICE OF FILLING CHICKEN CHILLI CON CARNE BLACK BEANS AND MIXED VEG (V)</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>PERUVIAN BEAN STEW (VEGAN)</p>
                    <p className={lunchcl.lnchDescription}>MIXED BEANS, VEGETABLES, CHILLI AND CORIANDER STEW. SERVED WITH WARM TORTILLAS OR RICE</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>CHILLI CON CARNE (GF)</p>
                    <p className={lunchcl.lnchDescription}>WARM YOUR SOUL WITH OUR FIERY CHILLI CON CARNE. SERVED IN TWO TACO BASKETS WITH SOUR CREAM</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>ENCHILADA (GF)</p>
                    <p className={lunchcl.lnchDescription}>TWO 6″ CORN TORTILLAS ROLLED AND STUFFED WITH YOUR CHOICE OF FILLING TOPPED WITH *HOMEMADE MOLE SAUCE AND TOASTED SESAME SEEDS CHICKEN CHILLI CON CARNE BLACK BEANS AND MIXED VEG (V)</p>
                </div>
            </div>

            <div>
                <div className={lunchcl.lnchSectionTitle}>
                    <p>DESSERTS</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>CHURROS</p>
                    <p className={lunchcl.lnchDescription}>TRADITIONAL MEXICAN DOUGHNUTS DUSTED WITH CINNAMON SUGAR AND SERVED WITH WARM HOMEMADE CHOCOLATE SAUCE</p>
                </div>
                <div className={lunchcl.lnchItemTitleAndDescription}>
                    <p className={lunchcl.lnchTitle}>CHILLI CHOCOLATE BROWNIE</p>
                    <p className={lunchcl.lnchDescription}>HOMEMADE CHOCOLATE BROWNIE INFUSED WITH MILD CHILLI. SERVED WITH VANILLA BEAN ICE CREAM AND WARM CHOCOLATE SAUCE</p>
                </div>
            </div>


        </div>

        <div className={lunchcl.menuParagraphs}>
                <p>SEE OUR COCKTAIL AND SPECIAL TEQUILA MENU<span>!</span></p>
                <p>MAKE SURE YOU ENJOY OUR GREAT FOOD & DRINKS OFFERS</p>

        </div>

    </div>;
}

export default LunchPage;