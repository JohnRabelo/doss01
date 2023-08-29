import menuItemSidescl from './MenuItemTemplateSides.module.css'
import MenuInfo from './MenuExtraInfo';
import dummyPriceTag from '../../assets/images/dsPhotos/icons/menus/orangeIconPrice.png'

function ItemTemplateElementSides(props){
    return <div>



        <div className={menuItemSidescl.menuItemContainer}>
            <div className={menuItemSidescl.menuItem}>  {/*column inside the item for the description to stay above the extra info*/} 
                <div className={menuItemSidescl.menuItemDetails}>{/*row for the image to be beside the description*/} 
                    <div className={menuItemSidescl.menuItemTitleAndDescriptionSides}>
                        {props.Title && <p>{props.Title}</p>}
                        <div className={menuItemSidescl.menuDescription}>
                            {props.Description && <p>{props.Description}</p>}
                        </div>
                    </div>
                    <div className={menuItemSidescl.menuItemPriceSides}>
                        {props.Price && <img src={dummyPriceTag} alt=""/>}
                        {props.Price && <span>{props.Price}</span>}

                    </div>
                </div> 
                <div className={menuItemSidescl.extraInfoOrganiser}>
                    {props.ExtraInfo1 && <MenuInfo ExtraInfo={props.ExtraInfo1} ExtraPrice={props.ExtraPrice1} />}
                    {props.ExtraInfo2 && <MenuInfo ExtraInfo={props.ExtraInfo2} ExtraPrice={props.ExtraPrice2} />}
                </div>
            </div> 

            <div className={menuItemSidescl.extraDetails} >
                <div>
                    
                </div>
            </div>






        </div>





    </div>;
}

export default ItemTemplateElementSides;