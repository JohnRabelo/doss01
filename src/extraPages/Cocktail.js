import cocktailcl from './Cocktail.module.css'
import SlideElementItem from '../components/CocktailComponents/SlideElement';

import tecSun from '../assets/images/dsPhotos/cocktailBar/teqsun.png'
import longSl from '../assets/images/dsPhotos/cocktailBar/longsl.png'
import piscSour from '../assets/images/dsPhotos/cocktailBar/piscSour.png'
import amarSour from '../assets/images/dsPhotos/cocktailBar/amarSour.png'
import fMart from   '../assets/images/dsPhotos/cocktailBar/fMart.png'
import fMarg from '../assets/images/dsPhotos/cocktailBar/fMarg.png'

import CocktailTemplateElement from '../components/CocktailComponents/CocktailTemplate';
import cktBannerImg from '../assets/images/dsPhotos/banner/bannerPhotoCocktail.JPG'
import cktBannerImg2 from '../assets/images/dsPhotos/banner/bannerPhotoWithoutText.jpg'

import { useState } from 'react';


const COCKTAIL_DATA = [
    {
        Title: 'TEQUILA SUNRISE',
        Image: tecSun
    },
    {
        Title: 'LONG ISLAND ICED TEA',
        Image: longSl
    },
    {
        Title: 'PISCO SOUR',
        Image: piscSour
    },
    {
        Title: 'AMARETTO SOUR',
        Image: amarSour
    },
    {
        Title: 'FRENCH MARTINI',
        Image: fMart
    },
    {
        Title: 'FROZEN MARGARITA/DAIQUIRI',
        Image: fMarg
    }
];


const TEQUILA_DATA = [
    {
        Title: 'Coconut 1800',
        Opt1: 'Shot  £3.50',
        Opt2: false,
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'AQUA RIVA TEQUILA',
        Opt1: 'BLANCO  £3.50',
        Opt2: 'REPOSADO £3.50',
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'OLMECA ALTOS',
        Opt1: 'Blanco: £4.00',
        Opt2: 'Reposado: £4.00',
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'HERRADURA',
        Opt1: 'Blanco: £4.50',
        Opt2: 'Reposado: £4.50',
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'EL JIMADOR',
        Opt1: 'Blanco: £4.25',
        Opt2: 'Reposado: £4.25',
        Opt3: false,
        Opt4: false,
        Opt5: false,
    }
    
];


const TEQUILA_DATA2= [
    {
        Title: 'PATRÓN',
        Opt1: 'Blanco: £5',
        Opt2: 'Reposado: £5',
        Opt3: 'Añejo: £5',
        Opt4: 'Café: £5',
        Opt5: 'Citrónge: £5',
    },
    {
        Title: 'CAZCABEL',
        Opt1: 'Coffee: £4.25',
        Opt2: 'Honey: £4.25',
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'KAH TEQUILAS',
        Opt1: 'Shot £5',
        Opt2: false,
        Opt3: false,
        Opt4: false,
        Opt5: false,
    },
    {
        Title: 'DON JULIO',
        Opt1: 'Blanco: £5',
        Opt2: 'Reposado: £5',
        Opt3: 'Añejo: £5',
        Opt4: '1942 Special £10',
        Opt5: false,
    },
    {
        Title: 'JOSÉ CUERVO',
        Opt1: 'LA FAMILIA  £8',
        Opt2: false,
        Opt3: false,
        Opt4: false,
        Opt5: false,
    }
];





function CocktailPage(){
    return <div className={cocktailcl.cocktailGn}>
        <div className={cocktailcl.cocktailSectionArea}>

            <section className={cocktailcl.cktBanner}>
                <div className={cocktailcl.cktbannerContainer}>
                    <img src={cktBannerImg} alt='' />
                </div>
            </section>
            
            <div className={cocktailcl.cktStatement}>
                <p>Dos Sombreros tequila and cocktail bar is on the third floor of our <span className={cocktailcl.greenTxt}>Mexican restaurant</span>. 
                    A perfect <br /> place to have a drink while you wait for a table, or after you meal. 
                    We also offer tequila tastings, <br /> cocktail classes and <span className={cocktailcl.greenTxt}>private party</span> reservations.<br /><br />
                    On your next night out in Brighton, drop in for a few drinks!<br />
                </p>
            </div>
            
            
            <div className={cocktailcl.cktTexts}>
                <p className={cocktailcl.cktTextsp}> COCKTAILS</p>
                <p className={cocktailcl.cktTextspgr2}> £7.25 Each / Two For £13.00*</p>
            </div>

            <div className={cocktailcl.cktText2}>
                <p className={cocktailcl.cktTextspgr4} > &#60; </p>
                <p className={cocktailcl.cktTextspgr4} > &#62; </p>
            </div>

            <div className={cocktailcl.cocktBannerContainer}>
                <div className={cocktailcl.cocktBanner}>
                    <div className={cocktailcl.cocktSlideContainer}>
                        {COCKTAIL_DATA.map((ItemUnit) => {
                            return <SlideElementItem Title={ItemUnit.Title} Image={ItemUnit.Image} />; 
                        })}
                    </div>
                </div>
            </div>

            <div className={cocktailcl.cktTexts}>
                <p className={cocktailcl.cktTextspgr3}> * When ordering two of the same cocktails at the same time</p> 
            </div>

            <div className={cocktailcl.cktTexts}>
                    <p className={cocktailcl.cktTextsp}> JUGS</p>
                    <p className={cocktailcl.cktTextspgr2}> £15.95 Jug of Pimm’s / Sangria</p>
            </div>
        </div>



        <div className={cocktailcl.tequilaArea}>
        
            <div className={cocktailcl.cktTexts3}>
                <p className={cocktailcl.cktTextsp}> TEQUILA</p>
            </div>

            <div className={cocktailcl.tequilaAreas}> 
                <CocktailTemplateElement List= {TEQUILA_DATA} /> 
                <CocktailTemplateElement List= {TEQUILA_DATA2} />
            </div>
        </div>
        
        </div>;
}

export default CocktailPage;