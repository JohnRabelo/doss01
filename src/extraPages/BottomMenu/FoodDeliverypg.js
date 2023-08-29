import deliverycl from './FoodDeliverypg.module.css'
import deliveryImg from '../../assets/images/dsPhotos/bottomMenuPagesPhotos/delivery.jpg'

function DeliveryPage(){

    return <div className={deliverycl.aboutDisplay}>

        <div>
            <img className={deliverycl.abImgContainer} src={deliveryImg} alt="" />
        </div>
        <div>
            <p className={deliverycl.abParagraphOrange}> 
                LUNCH OR DINNER DELIVERED TO YOUR HOME OR WORK!SUNDAY TO THURSDAY BETWEEN 12PM AND 9:30PM. <br/> <span className={deliverycl.greenText}>SIMPLY ORDER ON DINNER2GO AND WE’LL DO THE REST</span>!
            </p>
        </div>        
        
    </div>;
}

export default DeliveryPage;