import cocktTempcl from './CocktailTemplate.module.css'
import CocktailItemTemplateElement from './CocktailItemTemplate';


function CocktailTemplateElement(props){
    return <div>



        <div className={cocktTempcl.cocktailContainer}>

                {props.List.map((ItemUnit) => {
                    return <CocktailItemTemplateElement Title={ItemUnit.Title} Opt1={ItemUnit.Opt1} Opt2={ItemUnit.Opt2} Opt3={ItemUnit.Opt3} Opt4={ItemUnit.Opt4} Opt5={ItemUnit.Opt5} />; {/*The list is decompposed and, for every ItemUnit in the list, return an ItemTemplate element with corresponding title and description 2-2  */}
                })}

        </div>

        

    
    </div>;
}

export default CocktailTemplateElement;