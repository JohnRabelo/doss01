import dessertscl from './DessertsMenuPage.module.css'

import mainMenu from '../../assets/images/dsPhotos/icons/menus/mainMenu.JPG'
import lunch from '../../assets/images/dsPhotos/icons/menus/lunch.JPG'
import drinks from '../../assets/images/dsPhotos/icons/menus/drinks.JPG'
import desserts from '../../assets/images/dsPhotos/icons/menus/desserts.JPG'
import MenuTemplateElement from '../../components/Menu/MenuTemplate.js'
import MenuTemplateElementSides from '../../components/Menu/MenuTemplateSides'
import DessertsTemplateElement from './DessertsTemplate'
import { NavLink } from 'react-router-dom'

const DESSERTS_DATA = [
    {
        Title: 'CHURROS',
        Description: 'TRADITIONAL MEXICAN DOUGHNUTS DUSTED WITH CINNAMON SUGAR AND SERVED WITH WARM CHOCOLATE SAUCE.',
        Price: '£ 5.50',
        ExtraInfo1: false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'CHILLI CHOCOLATE BROWNIE',
        Description: 'HOMEMADE CHOCOLATE BROWNIE WITH A LITTLE KICK! SERVED WITH A SCOOP OF VANILLA BEAN ICE CREAM AND WARM CHOCOLATE SAUCE',
        Price: '£ 8.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'ICE CREAM BY THE SCOOP',
        Description: '1 SCOOP £1.75 2 SCOOPS £2.75 3 SCOOPS £3.50',
        Price: '£  ----  ',
        ExtraInfo1: false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'MARGARITA SORBET',
        Description: 'LIME & TEQUILA SORBET (Over 18’s ONLY).',
        Price: '£ 5.50',
        ExtraInfo1:  ' TEQUILA SHOT',
        ExtraPrice1: '£2',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'ICE CREAM SUNDAE',
        Description: '3 SCOOPS OF PREMIUM ICE CREAM; VANILLA BEAN, CHOCOLATE OR STRAWBERRY WITH CHOCOLATE SAUCE, WHIPPED CREAM AND WAFERS.',
        Price: '£ 6.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]


function DessertsMenuPage(){
    return <div>


        <div>
            <div className={dessertscl.menus}>
                <div className={dessertscl.menuButtom}>
                    <NavLink to='/menus'><a className={dessertscl.menusImg} href='' target='_blank'><img src={mainMenu} alt=""/></a></NavLink>
                </div>
                {/*<div className={dessertscl.menuButtom}>
                    <NavLink to='/lunch-menu'><a className={dessertscl.menusImg} href='' target='_blank'><img src={lunch} alt=""/></a></NavLink>
                </div>*/}
                <div className={dessertscl.menuButtom}>
                    <NavLink to='/drink-menu'><a className={dessertscl.menusImg} href='' target='_blank'><img src={drinks} alt=""/></a></NavLink>
                </div>
                <div className={dessertscl.menuButtom}>
                    <NavLink to='/desserts-menu'><a className={dessertscl.menusImg} href='' target='_blank'><img src={desserts} alt=""/></a></NavLink>
                </div>

            </div>

            <div className={dessertscl.menuLayout} >
                <p className={dessertscl.mTitle} >DESSERTS AND ICE CREAMS</p>  {/*As the title refers to both columns, It's not put individually inside of each*/} 
                <DessertsTemplateElement List= {DESSERTS_DATA} /> {/*Pass a whole list as prop  1-2*/}
            </div>

            <div className={dessertscl.menuParagraphs}>
                <p>SEE OUR COCKTAIL AND SPECIAL TEQUILA MENU<span>!</span></p>
                <p>MAKE SURE YOU ENJOY OUR GREAT FOOD & DRINKS OFFERS</p>

            </div>

        </div>



    </div>;
}

export default DessertsMenuPage;