import menucl from './DrinkMenuPage.module.css'

import mainMenu from '../../assets/images/dsPhotos/icons/menus/mainMenu.JPG'
import lunch from '../../assets/images/dsPhotos/icons/menus/lunch.JPG'
import drinks from '../../assets/images/dsPhotos/icons/menus/drinks.JPG'
import desserts from '../../assets/images/dsPhotos/icons/menus/desserts.JPG'
import MenuTemplateElement from '../../components/Menu/MenuTemplate.js'
import MenuTemplateElementSides from '../../components/Menu/MenuTemplateSides'
import DrinkTemplateElement from './DrinkTemplate'
import { NavLink } from 'react-router-dom'

const BEER_DATA = [
    {
        Title: 'ESTRELLA DAMM (SPAIN) (4.6%)',
        Description: false,
        Price: '£ 4.95',
        ExtraInfo1: 'Half Pint',
        ExtraPrice1: '£3.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'PISTONHEAD LAGER (SWEDEN) (4.6%)',
        Description: false,
        Price: '£ 4.95',
        ExtraInfo1:  'Half Pint',
        ExtraPrice1: '£3.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
]

const BEER_DATA2 = [
    {
        Title: 'HEFEWEIZEN WHEAT ALE',
        Description: false,
        Price: '£ 5.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'BULMERS ORIGINAL',
        Description: false,
        Price: '£ 4.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
    
];

const BEER_DATA3 = [
    {
        Title: 'SOL',
        Description: false,
        Price: '£ 3.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'DESPERADOS',
        Description: false,
        Price: '£ 4.20',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'PACIFICO CLARA',
        Description: false,
        Price: '£ 4.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'CUBANISTO (RUM FLAVOURED)',
        Description: false,
        Price: '£ 4.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'I.P.A',
        Description: false,
        Price: '£ 5.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'BULMERS PEAR',
        Description: false,
        Price: '£ 4.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'BULMERS CRUSHED BERRIES',
        Description: false,
        Price: '£ 4.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]


const REDWINE_DATA = [

    {
        Title:'EL VELERO TEMPRANILLO TINTO ALBALI, VALDENPEÑAS, SPAIN',
        Description: 'Fruit-driven, a good match for light meat and vegetable based dishes',
        Price: '£16.00',
        ExtraInfo1:  'GLASS 175ml £4.25',
        ExtraPrice1: '£ 5.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TIERRA MERLOT, CENTRAL VALLEY, CHILE',
        Description: 'A great all-rounder, as good with food as it is on it’s own',
        Price: '£18.00',
        ExtraInfo1:  'GLASS 175ml £4.75',
        ExtraPrice1: '£ 6.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CALLIA LUNARIS MALBEC, SAN JUAN, ARGENTINA',
        Description: 'Turns the heat up when paired with spicy dishes or peps up grilled or roasted beef dishes',
        Price: '£21.00',
        ExtraInfo1:  'GLASS 175ml £5.50',
        ExtraPrice1: '£ 7.00',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PABLO OLD VINE GARNACHA, CALATAYUD, SPAIN',
        Description: 'Spicy, robust and powerful, just like the label!',
        Price: '£26.00',
        ExtraInfo1:  null,
        ExtraPrice1: null,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PORTILLO PINOT NOIR, UCO VALLEY, ARGENTINA',
        Description: 'Light on tannin, high on flavour, simply luscious',
        Price: '£27.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'L.A. CETTO PETITE SIRAH, VALLE DE GUADALUPE, MEXICO',
        Description: 'A true taste of Mexico, the grape is similar to Shiraz, smooth yet spicy',
        Price: '£32.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
    
]

const WHITEWINE_DATA =[
    {
        Title:'CULLINAN VIEW CHENIN BLANC, WESTERN CAPE, S. AFRICA',
        Description: 'A great partner for chicken and vegetable dishes with a touch of sweetness to them',
        Price: '£16.00',
        ExtraInfo1:  'GLASS 175ml £4.25',
        ExtraPrice1: '£ 5.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PARINI PINOT GRIGIO, ITALY',
        Description: 'Distinctive nose of wild flowers, with touches of honey and banana; soft, fresh and lively with notes of ripe pear',
        Price: '£18.00',
        ExtraInfo1:  'GLASS 175ml £4.75',
        ExtraPrice1: '£ 6.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'ERRÁZURIZ 1870 PEÑUELAS BLOCK SAUVIGNON BLANC, CASABLANCA VALLEY, CHILE',
        Description: 'Classic Casablanca herbs, cut grass and tropical fruit',
        Price: '£21.00',
        ExtraInfo1:  'GLASS 175ml £5.50',
        ExtraPrice1: '£ 7.00',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'DON JACOBO RIOJA BLANCO, BODEGAS CORRAL, SPAIN',
        Description: 'Light and refreshing, a mouth-watering partner for salads and seafood',
        Price: '£26.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'ERRÁZURIZ CHARDONNAY WILD FERMENT, CASABLANCA VALLEY, CHILE',
        Description: 'SILVER (2013) International Wine Challenge 2014. Just perfect with chicken and spice',
        Price: '£32.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'ANTONIO RUBINI PINOT GRIGIO ROSE DELLE VENEZIE, ITALY',
        Description: 'Soft and fruity ‘PG’ rosé, good with chicken, salads and seafood.',
        Price: '£18.00',
        ExtraInfo1:  'GLASS 175ml £4.75',
        ExtraPrice1: '£ 6.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]


const SPARKLING_DATA = [
    {
        Title:'GALANTI PROSECCO EXTRA DRY, ITALY',
        Description: 'BRONZE (NV) International Wine & Spirit Competition 2014. Fresh, vibrant & refreshing fizz',
        Price: '£25.00',
        ExtraInfo1: false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }

]

const SPIRITS_DATA1 = [
    {
        Title:'SINGLE (25ML)',
        Description: 'AMARETTO • ARCHERS • BACARDI • BAILEYS • BRANDY • GIN • WILD TURKEY • JÄEGERMEISTER • MALIBU • SAMBUCA • SAILOR JERRY • BACARDI CARTA NEGRA • TIA MARIA • TUACA • VODKA • WHISKEY • LARIUS • SOBIESKI • AGUA RIVA TEQUILA • PAMPERO • PAMPERO ESPECIAL',
        Price: '£ 3.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'JUG OF SANGRIA',
        Description: false,
        Price: '£15.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]

const SPIRITS_DATA2 =[
    {
        Title:'DOUBLE (50ML)',
        Description: 'AMARETTO • ARCHERS • BACARDI • BAILEYS • BRANDY • GIN • WILD TURKEY • JÄEGERMEISTER • MALIBU • SAMBUCA • SAILOR JERRY • BACARDI CARTA NEGRA • TIA MARIA • TUACA • VODKA • WHISKEY • LARIUS • SOBIESKI • AGUA RIVA TEQUILA • PAMPERO • PAMPERO ESPECIAL',
        Price: '£ 5.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'JUG OF PIMM’S',
        Description: false,
        Price: '£15.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]

const SOFTDRINKS_DATA1= [
    {
        Title:'COKE',
        Description: false,
        Price: '£ 2.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'DIET COKE',
        Description: false,
        Price: '£ 2.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FENTIMANS BOTANICALLY ORGANIC',
        Description: 'ROSE LEMONADE * GINGER BEER',
        Price: '£ 3.25',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PINEAPPLE JUICE',
        Description: false,
        Price: '£ 2.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CRANBERRY JUICE',
        Description: false,
        Price: '£ 2.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FRUIT SMOOTHIES',
        Description: 'STRAWBERRY * RASPBERRY * PASSION FRUIT * MANGO',
        Price: '£ 4.25',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    } 
]


const SOFTDRINKS_DATA2= [
    {
        Title:'SPRITE',
        Description: false,
        Price: '£ 2.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FANTA',
        Description: false,
        Price: '£ 1.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FOLKINGTON’S 100% FRUIT JUICE',
        Description: 'APPLE JUICE * ORANGE JUICE',
        Price: '£ 3.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'STILL WATER',
        Description: false,
        Price: '£ 2.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'SPARKLING WATER',
        Description: false,
        Price: '£ 2.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PINT OF SOFT DRINK',
        Description: false,
        Price: '£ 3.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    } 
]


const HOTDRINKS_DATA1= [
    {
        Title:'FILTER COFFEE',
        Description: false,
        Price: '£ 2.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'EARL GREY',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'GREEN TEA',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FRUIT TEA',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]


const HOTDRINKS_DATA2= [
    {
        Title:'ENGLISH BREAKFAST TEA',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CAMOMILE',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PEPPERMINT',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'LIQUEUR COFFEES',
        Description: 'FRENCH COFFEE (BRANDY) • IRISH COFFEE (WHISKEY) • BAILEYS COFFEE • JAMAICAN COFFEE (TIA MARIA) • MEXICAN COFFEE (OLMECA REPOSADO TEQUILA)',
        Price: '£ 4.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]





function DrinksMenuPage(){
    return <div>


        <div>
            <div className={menucl.menus}>
                <div className={menucl.menuButtom}>
                    <NavLink to='/menus'><a className={menucl.menusImg} href='' target='_blank'><img src={mainMenu} alt=""/></a></NavLink>
                </div>
                <div className={menucl.menuButtom}>
                    <NavLink to='/lunch-menu'><a className={menucl.menusImg} href='' target='_blank'><img src={lunch} alt=""/></a></NavLink>
                </div>
                <div className={menucl.menuButtom}>
                    <NavLink to='/drink-menu'><a className={menucl.menusImg} href='' target='_blank'><img src={drinks} alt=""/></a></NavLink>
                </div>
                <div className={menucl.menuButtom}>
                    <NavLink to='/desserts-menu'><a className={menucl.menusImg} href='' target='_blank'><img src={desserts} alt=""/></a></NavLink>
                </div>


            </div>

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

        </div>



    </div>;
}

export default DrinksMenuPage;