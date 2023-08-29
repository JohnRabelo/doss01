import navcl from './Nav.module.css'
import logo from '../assets/images/dsPhotos/icons/logo.jpg'
import skull from '../assets/images/dsPhotos/icons/skull.png'
import hamburguer from '../assets/images/dsPhotos/icons/hbg.JPG'
import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';




function NavBar(){

    const [menuIsOpen, setMenuIsOpen] = useState(false);




    function switchMenu(){
        const windowSize = window.innerWidth;

        setMenuIsOpen(current => !current);
        if (windowSize<840){
            if (menuIsOpen){
                return document.querySelector('nav').style.display = 'flex';
            }
            else{
                return document.querySelector('nav').style.display = 'none';
            }
        }

    }



    return <div>

        <header>
            <div className={navcl.header}>
                <div className={navcl.logo}>
                    <div className={navcl.logoimg}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className={navcl.menu}>
                    
                    <nav className={navcl.nav}>
                        <ul>
                            <li><NavLink to='/' className={navcl.navigLink} onClick={switchMenu}>HOME</NavLink></li>  
                            <li><NavLink to='/mexican-brighton' className={navcl.navigLink} onClick={switchMenu}>ABOUT</NavLink></li>
                            <li><NavLink to='/menus' className={navcl.navigLink} onClick={switchMenu} >MENU</NavLink></li>
                            <li><NavLink to='/drinks-food-offers' className={navcl.navigLink} onClick={switchMenu}>OFFERS</NavLink></li>
                            <li><NavLink to='/gallery' className={navcl.navigLink} onClick={switchMenu}>GALLERY</NavLink></li>
                            <li><NavLink to='/contact' className={navcl.navigLink} onClick={switchMenu}>CONTACT</NavLink></li>
                        </ul>
                    </nav>
                    
                </div>
                <div className={navcl.skull}>
                    <div className={navcl.skullImgContainer}>
                        <img className={navcl.skullImg}  src={skull} alt=""/>
                    </div>
                </div>
                <div className={navcl.menuOpenerContainer} onClick={switchMenu}>
                        <img className={navcl.menuOpener} src={hamburguer}  />
                </div>
                
            </div>
        </header>

        <Outlet />


    </div>;
}


export default NavBar;