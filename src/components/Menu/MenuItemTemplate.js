import menuItemcl from './MenuItemTemplate.module.css'
import MenuInfo from './MenuExtraInfo';
import dummyPriceTag from '../../assets/images/dsPhotos/icons/menus/orangeIconPrice.png'

function ItemTemplateElement(props){
    return <div>



        <div className={menuItemcl.menuItemContainer}>
            <div className={menuItemcl.menuItem}>  {/*column inside the item for the description to stay above the extra info*/} 
                <div className={menuItemcl.menuItemDetails}>{/*row for the image to be beside the description*/} 
                    <div className={menuItemcl.menuItemTitleAndDescription}>
                        {props.Title && <p>{props.Title}</p>}
                        <div className={menuItemcl.menuDescription}>
                        {props.Description && <p>{props.Description}</p>}
                    </div>
                    <div className={menuItemcl.extraInfoOrganiser}>
                        {props.ExtraInfo1 && <MenuInfo ExtraInfo={props.ExtraInfo1} ExtraPrice={props.ExtraPrice1} />}
                        {props.ExtraInfo2 && <MenuInfo ExtraInfo={props.ExtraInfo2} ExtraPrice={props.ExtraPrice2} />}
                    </div>

                    </div>
                    <div className={menuItemcl.menuItemPrice}>
                        {props.Price && <img src={dummyPriceTag} alt=""/>}
                        {props.Price && <span>{props.Price}</span>}
                    </div>
                </div> 
            </div> 


            <div className={menuItemcl.extraDetails} >
                <div>
                    
                </div>
            </div>






        </div>





    </div>;
}

export default ItemTemplateElement;