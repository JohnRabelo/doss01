import dessertscl from './Menu.module.css'

import drinks from '../assets/images/dsPhotos/icons/menus/drinks.JPG'
import { NavLink } from 'react-router-dom'
import MMenuImg from '../assets/images/dsPhotos/icons/DosSombrerosMainMenu.jpg'

 

function DessertsMenuPage(){
    return <div>
        <div>
            <div className={dessertscl.menus}>
                <div className={dessertscl.menuButtom}>
                    <NavLink to='/drink-menu'><a className={dessertscl.menusImg} href='' target='_blank'><img src={drinks} alt=""/></a></NavLink>
                </div>
            </div>
            
            <div className={dessertscl.drinksMenuImg}>
                <img src={MMenuImg} alt='MainMenu'/>
            </div>

        </div>

    </div>;
}

export default DessertsMenuPage;