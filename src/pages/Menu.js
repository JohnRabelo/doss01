import menucl from './Menu.module.css'

import mainMenu from '../assets/images/dsPhotos/icons/menus/mainMenu.JPG'
import lunch from '../assets/images/dsPhotos/icons/menus/lunch.JPG'
import drinks from '../assets/images/dsPhotos/icons/menus/drinks.JPG'
import desserts from '../assets/images/dsPhotos/icons/menus/desserts.JPG'
import MenuTemplateElement from '../components/Menu/MenuTemplate.js'
import MenuTemplateElementSides from '../components/Menu/MenuTemplateSides'
import { NavLink } from 'react-router-dom'


const MENU_DATA = [
    {
        Title: 'NACHOS (V, GF)',
        Description: 'TORTILLA CHIPS WITH SALSA, GUACAMOLE, SOUR CREAM, CHILLI CON QUESO AND JALEPEÑOS (V)',
        Price: '£ 5.50',
        ExtraInfo1: 'NACHOS FOR TWO',
        ExtraPrice1: '£9.95',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'TOSTADAS',
        Description: 'CRISP CORN TORTILLA WITH WARM GOAT’S CHEESE, ROASTED PEPPERS, SALSA, GUACAMOLE AND LETTUCE (V)',
        Price: '£ 6.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'HOMEMADE TAQUITOS (TA-KEY-TOS)',
        Description: 'TWO TORTILLAS FILLED WITH CHICKEN AND DEEP FRIED FOR A CRISPY CRUNCH SERVED WITH SALSA, SOUR CREAM AND GUACAMOLE.',
        Price: '£ 6.25',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title: 'SWEET POTATO, BEETROOT & FETA TAQUITOS (V)',
        Description: 'TWO TORTILLA FILLED WITH SWEET POTATO, BEETROOT & Feta cheese, DEEP FRIED FOR A CRISPY CRUNCH, SERVED WITH SALSA, GUACAMOLE & SOUR CREAM.',
        Price: '£ 5.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
    
];

const MENU_DATA2 = [
    {
        Title:'POTATO SKINS (V, GF)',
        Description: 'TWO POTATO SKINS DEEP FILLED WITH SALSA AND CHILLI CON QUESO. SERVED WITH SOUR CREAM AND GUACAMOLE (V).',
        Price: '£ 5.95',
        ExtraInfo1:  'ADD GRILLED CHORIZO',
        ExtraPrice1: '£1.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'BUFFALO WINGS (GF)',
        Description: 'STICKY CHICKEN WINGS SMOTHERED IN SAUCE SERVED WITH CUCUMBER STICKS AND BLUE CHEESE DRESSING.',
        Price: '£ 6.50',
        ExtraInfo1:  '12 PIECES',
        ExtraPrice1: '£12.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TEQUILA FIRECRACKER PRAWNS (GF)',
        Description: 'PAN FRIED KING PRAWNS IN A TEQUILA, CHILLI AND LIME MARINADE.',
        Price: '£ 7.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FIESTA PLATTER FOR TWO',
        Description: 'CHICKEN WINGS, POTATO SKINS, JALEPEÑO POPPERS, ONION RINGS, CHEESY NACHOS AND CORN ON THE COB. SERVED WITH SALSA AND SOUR CREAM.',
        Price: '£13.95',
        ExtraInfo1:  'FOR FOUR',
        ExtraPrice1: '£28.00',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]


const SALAD_DATA = [
    {
        Title:'CAESAR SALAD',
        Description: 'DID YOU KNOW THAT THIS CLASSIC SALAD WAS INVENTED IN TIJUANA, MEXICO IN 1924 BY ITALIAN CHEF CAESAR CARDINI? ICEBERG LETTUCE, PARMESAN CHEESE, CROUTONS AND CAESAR DRESSING',
        Price: '£ 6.50',
        ExtraInfo1: 'ADD GRILLED CHICKEN',
        ExtraPrice1: '£2',
        ExtraInfo2: 'ADD AVOCADO(V)',
        ExtraPrice2: '£1',
        ExtraDetail: false,
    }
]

const SALAD_DATA2 = [
    {
        Title:'GOAT’S CHEESE & MARINATED PEPPERS SALAD (V, GF)',
        Description: 'SERVED ON A BED OF SALAD LEAVES WITH TOMATO, CUCUMBER AND RED ONION. WITH A VINAIGRETTE DRESSING',
        Price: '£ 7.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CHICKEN, CHORIZO AND MANGO SALAD (GF)',
        Description: 'WARM CHORIZO AND CHICKEN WITH HOMEMADE MANGO SALSA, TOMATO, CUCUMBER, PEPPERS AND RED ONION ON A BED OF SALAD LEAVES WITH VINAIGRETTE DRESSING',
        Price: '£ 9.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
] 

const ESPEC_DATA = [

    {
        Title:'CHICKEN FAJITAS',
        Description: 'MARINATED STRIPS OF CHICKEN BREAST',
        Price: '£13.73',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£26.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'FILLET STEAK FAJITAS',
        Description: 'MARINATED STRIPS Of FILLET STEAK',
        Price: '£16.25',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£31.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CHICKEN AND CHORIZO FAJITAS',
        Description: 'CHICKEN BREAST, CHORIZO AND HERBY MUSHROOMS',
        Price: '£16.25',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£31.55',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'BURRITO',
        Description: 'A 12″ FLOUR TORTILLA FILLED WITH REFRIED BEANS, RICE, CHEESE AND YOUR CHOICE OF FILLING. WITH SALSA, GUACAMOLE AND SOUR CREAM • CHICKEN • CHILLI CON CARNE • BLACK BEANS AND MIXED VEG • CHICKEN CHILLI CON CARNE• BLACK BEANS & MIXED VEG',
        Price: '£10.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'ENCHILADA',
        Description: 'TWO 6” CORN TORTILLAS ROLLED AND FILLED WITH YOUR CHOICE OF FILLING TOPPED WITH HOMEMADE MOLE SAUCE AND TOASTED SESAME SEEDS. SERVED WITH RICE AND REFRIED BEANS. CHICKEN CHILLI CON CARNE BLACK BEANS & MIXED VEG',
        Price: '£10.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
] 

const ESPEC_DATA2 = [
    {
        Title:'KING PRAWN FAJITAS',
        Description: 'MARINATED KING PRAWNS',
        Price: '£15.50',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£28.50',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'VEGETARIAN FAJITAS',
        Description: 'MIXED VEGETABLES WITH REFRIED BEANS',
        Price: '£11.95',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£20.95',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'DOS SOMBREROS FIESTA COMBO!',
        Description: 'CHICKEN, FILLET STEAK AND KING PRAWNS',
        Price: '£17.95',
        ExtraInfo1:  'FOR TWO',
        ExtraPrice1: '£34.25',
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CHILLI CON CARNE (GF)',
        Description: 'WARM YOUR SOUL WITH OUR FIERY CHILLI CON CARNE SERVED IN TWO TACO BASKETS WITH RICE AND SOUR CREAM',
        Price: '£10.25',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'PERUVIAN BEAN STEW (VEGAN, GF)',
        Description: 'MIXED BEANS, VEGETABLES, CHILLI AND CORIANDER STEW SERVED WITH WARM TORTILLAS OR RICE',
        Price: '£10.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TACOS',
        Description: 'THREE FLOUR TACOS FILLED WITH LETTUCE AND HOMEMADE SALSA AND YOUR CHOICE OF FILLING. SERVED WITH RICE AND REFRIED BEANS. GRILLED CHICKEN AND MANGO SALSA • BLACK BEANS, SOUR CREAM AND CHEESE (V)',
        Price: '£12.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }    
]

const SOULFOOD_DATA = [


    {
        Title:'JAMAICAN JERK CHICKEN (GF)',
        Description: 'CHICKEN SUPREME GRILLED IN A JAMAICAN MARINADE, WITH MOLE SAUCE',
        Price: '£14.25',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'MEXICAN CHICKEN (GF)',
        Description: 'GRILLED CHICKEN BREAST MARINATED IN LIME AND GARLIC',
        Price: '£13.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TEXAS BBQ RIBS (GF)',
        Description: 'RACK OF PORK RIBS SMOTHERED IN BBQ SAUCE',
        Price: '£14.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'MEXICAN BURGER',
        Description: 'HOMEMADE CLASSIC BEEF BURGER IN A BRIOCHE BUN LOADED WITH LETTUCE, SALSA, CHIPOTLE MAYO, JALEPEÑOS, CRUSHED TORTILLA CHIPS AND CHILLI CON QUESO',
        Price: '£13.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CAJUN SALMON (GF)',
        Description: 'BLACKENED SALMON STEAK TOPPED WITH HOMEMADE MANGO SALSA AND LIME',
        Price: '£14.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'STUFFED PEPPER (VEGAN, GF)',
        Description: 'LARGE BELL PEPPER STUFFED WITH RICE, BLACK BEANS, REFRIED BEANS AND VEGETABLES. PACKED FULL OF FLAVOUR!',
        Price: '£11.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }




]

const SOULSIDE_DATA = [
    {
        Title:'BLACK BEANS, SOUR CREAM & CHEESE',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'COLESLAW',
        Description: false,
        Price: '£ 2.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CORN ON THE COB',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'JALEPEÑO POPPERS',
        Description: false,
        Price: '£ 3.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'JALEPEÑOS',
        Description: false,
        Price: '£ 1.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'ONION RINGS',
        Description: false,
        Price: '£ 2.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'SIDE SALAD',
        Description: false,
        Price: '£ 3.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'SOUR CREAM',
        Description: false,
        Price: '£ 1.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'CHEESE',
        Description: false,
        Price: '£ 1.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }
]

const SOULSIDE_DATA2 = [

    {
        Title:'HOMEMADE REFRIED BEANS',
        Description: false,
        Price: '£ 1.75',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'RICE',
        Description: false,
        Price: '£ 2.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'HOMEMADE MANGO SALSA',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'SKIN ON FRIES',
        Description: false,
        Price: '£ 3.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'SWEET POTATO FRIES',
        Description: false,
        Price: '£ 4.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TORTILLAS (4)',
        Description: false,
        Price: '£ 1.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'HOMEMADE SALSA',
        Description: false,
        Price: '£ 1.50',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'HOMEMADE GUACAMOLE',
        Description: false,
        Price: '£ 1.95',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    },
    {
        Title:'TORTILLA CHIPS & SALSA',
        Description: false,
        Price: '£ 2.00',
        ExtraInfo1:  false,
        ExtraPrice1: false,
        ExtraInfo2: false,
        ExtraPrice2: false,
        ExtraDetail: false,
    }




]



function MenuPage(){
    return <div>


        <div>
            <div className={menucl.menus}>
                <div className={menucl.menuButtom}>
                    <NavLink to='/'><a className={menucl.menusImg} href='' target='_blank'><img src={mainMenu} alt=""/></a></NavLink>
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
                <p className={menucl.mTitle} >PRIMEROS/STARTERS</p>  {/*As the title refers to both columns, It's not put individually inside of each*/}
                <div className={menucl.menuAreas}> 
                    <MenuTemplateElement List= {MENU_DATA} /> {/*Pass a whole list as prop  1-2*/}
                    <MenuTemplateElement List= {MENU_DATA2} />
                </div>
            </div>

            
            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >Salads</p>  {/*As the title refers to both columns, It's not put individually inside of each*/}
                <div className={menucl.menuAreas}> 
                    <div>
                        <MenuTemplateElement List= {SALAD_DATA} /> 
                        <span className={menucl.saladObs} >ALL DRESSINGS ARE SERVED ON THE SIDE</span>
                    </div>
                    <MenuTemplateElement List= {SALAD_DATA2} />
                </div>
            </div>


            <div className={menucl.menuLayout} >
                <p className={menucl.mTitle} >ESPECIALIDADES</p>  {/*As the title refers to both columns, It's not put individually inside of each*/}
                <div className={menucl.especDescription} >
                    <p>FAJITAS ALL SERVED ON A SIZZLING SKILLET WITH ONIONS AND MIXED PEPPERS ACCOMPANIED BY HOMEMADE SALSA AND HOMEMADE GUACAMOLE, 
                        SOUR CREAM AND CHEESE WITH SOFT FLOUR TORTILLAS TO WRAP IT ALL UP IN!
                    </p>
                </div>
                <div className={menucl.menuAreas}> 
                    <MenuTemplateElement List= {ESPEC_DATA} /> {/*Pass a whole list as prop  1-2*/}
                    <MenuTemplateElement List= {ESPEC_DATA2} />
                </div>
            </div>


            <div className={menucl.menuLayout} >
                <div className={menucl.menuAreas}>
                    <div>
                        <div className={menucl.sidesTitleDescript}>
                            <div className={menucl.soulTitles}>
                                <p className={menucl.soulTitlesSoulFood}>SOUL FOOD</p>
                            </div>

                        </div>
                        <MenuTemplateElement List= {SOULFOOD_DATA} /> {/*Pass a whole list as prop  1-2*/}
                        <div className={menucl.menuDisclaimer} >
                            <p>AS ALL OUR DISHES ARE COOKED TO ORDER, PLEASE BE PREPARED TO WAIT SLIGHTLY LONGER FOR SOUL FOOD DISHES
                                • (V) = VEGETARIAN (GF) = GLUTEN FREE. FOR TABLES OF 4 OR MORE, A DISCRETIONARY 10% SERVICE CHARGE WILL
                                BE ADDED TO YOUR BILL. WE CAN NOT GUARANTEE THAT ANY OF OUR DISHES ARE 100% FREE OF NUTS, OR ANY OTHER ALLERGENIC INGREDIENTS.
                                PLEASE INFORM YOUR WAITER Of ANY ALLERGIES BEFORE ORDERING. OUR MOLE SAUCE IS MADE WITH PEANUTS AND SEASAME SEEDS.
                                ALTHOUGH GREAT CARE HAS BEEN TAKEN TO REMOVE ALL BONES FROM CHICKEN AND FISH DISHES SOME MAY REMAIN</p>
                        </div>
                    </div> 
                    <div>
                        <div className={menucl.sidesTitleDescript}>
                            <div className={menucl.soulTitles}>
                                <p>SOUL SIDES</p>
                            </div>
                            <div className={menucl.accompany}>
                                <p>CHOOSE TWO SIDES FROM TO ACCOMPANY YOUR MEAL</p>
                            </div>
                        </div>
                        <div className={menucl.sidesSpaceDivision} >
                            <MenuTemplateElementSides List= {SOULSIDE_DATA} />
                            <MenuTemplateElementSides List= {SOULSIDE_DATA2} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={menucl.menuParagraphs}>
                <p>SEE OUR COCKTAIL AND SPECIAL TEQUILA MENU<span>!</span></p>
                <p>MAKE SURE YOU ENJOY OUR GREAT FOOD & DRINKS OFFERS</p>

            </div>

        </div>



    </div>;
}

export default MenuPage;