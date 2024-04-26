import dessertsItemcl from './DrinkItemTemplate.module.css'
import MenuInfo from '../../components/Menu/MenuExtraInfo.js'
import dummyPriceTag from '../../assets/images/dsPhotos/icons/menus/orangeIconPrice.png'

function DessertsItemTemplateElement(props){
    return <div>



        <div className={dessertsItemcl.menuItemContainer}>
            <div className={dessertsItemcl.menuItem}>  {/*column inside the item for the description to stay above the extra info*/} 
                <div className={dessertsItemcl.menuItemDetails}>{/*row for the image to be beside the description*/} 
                    <div className={dessertsItemcl.menuItemTitleAndDescription}>
                        {props.Title && <p>{props.Title}</p>}
                        <div className={dessertsItemcl.menuDescription}>
                            {props.Description && <p>{props.Description}</p>}
                        </div>
                    <div className={dessertsItemcl.extraInfoOrganiser}>
                        {props.ExtraInfo1 && <MenuInfo ExtraInfo={props.ExtraInfo1} ExtraPrice={props.ExtraPrice1} />}
                        {props.ExtraInfo2 && <MenuInfo ExtraInfo={props.ExtraInfo2} ExtraPrice={props.ExtraPrice2} />}
                    </div>
                    </div>
                    <div className={dessertsItemcl.menuItemPrice}>
                        {props.Price && <img src={dummyPriceTag} alt=""/>}
                        {props.Price && <span>{props.Price}</span>}
                    </div>
                </div> 

            </div> 

            <div className={dessertsItemcl.extraDetails} >
                <div>
                    
                </div>
            </div>






        </div>





    </div>;
}

export default DessertsItemTemplateElement;