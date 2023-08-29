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
        <section className={cocktailcl.default}>
            <div className={cocktailcl.sectionTitle}>Example title</div>
            <div className={cocktailcl.sectionDesc}>Example description</div>
            <div className={cocktailcl.sectionBody}>
                <div className={cocktailcl.sectionTeam}>
                    <div className={cocktailcl.ssliders}>

                        

                        <div className={cocktailcl.sslide}>
                            <div className={cocktailcl.sslideArea}>
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        </div>;
}

export default CocktailPage;