import menuSidescl from './MenuTemplateSides.module.css'
import ItemTemplateElementSides from './MenuItemTemplateSides';


function MenuTemplateElementSides(props){
    return <div>

        <div className={menuSidescl.menuContainer}>

            {props.List.map((ItemUnit) => {
                return <ItemTemplateElementSides Title={ItemUnit.Title} Description={ItemUnit.Description} Price={ItemUnit.Price} ExtraInfo1={ItemUnit.ExtraInfo1} ExtraPrice1={ItemUnit.ExtraPrice1} ExtraInfo2={ItemUnit.ExtraInfo2} ExtraPrice2={ItemUnit.ExtraPrice2} ExtraDetail={ItemUnit.ExtraDetail} />; {/*The list is decompposed and, for every ItemUnit in the list, return an ItemTemplate element with corresponding title and description 2-2  */}
            })}

        </div>

        

    
    </div>;
}

export default MenuTemplateElementSides;