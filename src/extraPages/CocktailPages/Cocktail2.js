import cocktailcl from './Cocktail.module.css'
import SlideElementItem from '../components/CocktailComponents/SlideElement';

import tecSun from '../assets/images/dsPhotos/cocktailBar/teqsun.png'
import longSl from '../assets/images/dsPhotos/cocktailBar/longsl.png'
import piscSour from '../assets/images/dsPhotos/cocktailBar/piscSour.png'
import amarSour from '../assets/images/dsPhotos/cocktailBar/amarSour.png'
import fMart from   '../assets/images/dsPhotos/cocktailBar/fMart.png'
import fMarg from '../assets/images/dsPhotos/cocktailBar/fMarg.png'


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




function CocktailPage(){
    return <div>
        
        <div>
            <section className={cocktailcl.defaultCard} >
                <div className={cocktailcl.cardTitle}>Cocktails</div>
                <div className={cocktailcl.cardDesc}>£7.25 Each / Two For £13.00*</div>
                <div className={cocktailcl.cardBody}>
                    <div className={cocktailcl.cardDrinks}>
                        <div className={cocktailcl.slideElements}>
                            <div className={cocktailcl.slideElement}>

                                {COCKTAIL_DATA.map((ItemUnit) => {
                                    return <SlideElementItem Title={ItemUnit.Title} Image={ItemUnit.Image} />; 
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        </div>;
}

export default CocktailPage;