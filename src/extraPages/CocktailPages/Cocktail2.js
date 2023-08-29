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

        {/*Drink menu bkp */}
        <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >BEER AND CIDER</p>  {/*As the title refers to both columns, It's not put individually inside of each*/}
                <div className={menucl.menuAreas}> 
                    <div>
                        <MenuTemplateElement List= {BEER_DATA} /> 
                        <DrinkTemplateElement List= {BEER_DATA2} /> {/*Pass a whole list as prop  1-2*/}
                        <DrinkTemplateElement List= {BEER_DATA3} />
                    </div>

                </div>
            </div>

            
            <div className={menucl.menuLayout} >
                <div className={menucl.menuAreas}> 
                    <div>
                        <p className={menucl.mTitle} >RED WINE</p>
                        <MenuTemplateElement List= {REDWINE_DATA} />
                    </div>
                    <div>
                        <p className={menucl.mTitle} >WHITE WINE</p>
                        <MenuTemplateElement List= {WHITEWINE_DATA} />
                    </div>
                </div>
            </div>


            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >SPARKLING AND ROSE WINES</p>
                <div className={menucl.menuAreas}> 
                    <MenuTemplateElement List= {SPARKLING_DATA} />
                </div>
            </div>

            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >SPIRITS</p>
                <div className={menucl.menuAreas}> 
                    <MenuTemplateElement List= {SPIRITS_DATA1} />
                    <MenuTemplateElement List= {SPIRITS_DATA2} />
                </div>
            </div>

            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >SOFT DRINKS</p>
                <div className={menucl.menuAreas}> 
                    <DrinkTemplateElement List= {SOFTDRINKS_DATA1} />
                    <DrinkTemplateElement List= {SOFTDRINKS_DATA2} />
                </div>
            </div>

            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >HOT DRINKS</p>
                <div className={menucl.menuAreas}> 
                    <DrinkTemplateElement List= {HOTDRINKS_DATA1} />
                    <DrinkTemplateElement List= {HOTDRINKS_DATA2} />
                </div>
            </div>


            <div className={menucl.menuParagraphs}>
                <p>SEE OUR COCKTAIL AND SPECIAL TEQUILA MENU<span>!</span></p>
                <p>MAKE SURE YOU ENJOY OUR GREAT FOOD & DRINKS OFFERS</p>

            </div>
        {/*Drink menu bkp */}
        
        </div>;
}

export default CocktailPage;