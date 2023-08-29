import menuInfocl from './MenuExtraInfo.module.css'

function MenuInfo(props){
    return <div>
        <div className={menuInfocl.menuItemExtra}>
            <p className={menuInfocl.menuItemExtra1}>
                {props.ExtraInfo}
            </p>
            <p className={menuInfocl.menuItemExtra2}>
                {props.ExtraPrice}
            </p>
        </div>

    </div>;
}

export default MenuInfo;




  