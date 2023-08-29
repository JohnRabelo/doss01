import cocktailItemcl from './CocktailItemTemplate.module.css'

function CocktailItemTemplateElement(props){
    return <div>



        <div className={cocktailItemcl.cocktailItemContainer}>
            <div className={cocktailItemcl.cocktailItem}>
                <div className={ cocktailItemcl.cocktailItemDetails}>
                    <div className={ cocktailItemcl.cocktailItemTitleAndDescription}>
                        <p>{props.Title}</p>
                    </div>
                </div>
                <div className={ cocktailItemcl.cocktailItemExtra}>
                    <div className={ cocktailItemcl.cocktailItemExtra1}>
                        {props.Opt1 && <p>{props.Opt1}</p>} 
                        {props.Opt2 && <p>{props.Opt2}</p>} 
                        {props.Opt3 && <p>{props.Opt3}</p>} 
                        {props.Opt4 && <p>{props.Opt4}</p>} 
                        {props.Opt5 && <p>{props.Opt5}</p>} 
                    </div>
                </div>   
            </div>  
        </div>





    </div>;
}

export default CocktailItemTemplateElement;