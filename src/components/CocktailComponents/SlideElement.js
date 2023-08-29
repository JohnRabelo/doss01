import slideElementcl from './SlideElement.module.css'



function SlideElementItem(props){
    return <div>
        
        <div className={slideElementcl.slideElementArea}>
            <img src={props.Image} alt=""/>
            <div className={slideElementcl.elementAreaName}>{props.Title}</div>
        </div>

    </div>;
}

export default SlideElementItem;