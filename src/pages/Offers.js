import offerscl from './Offers.module.css'
import offersImg from '../assets/images/dsPhotos/offers/o1.jpg'

function OffersPage(){

    return <div className={offerscl.aboutDisplay}>

        <div className={offerscl.offrImgContainer}>
            <img className={offerscl.offrImgItem} src={offersImg} alt="" />
        </div>
        <div className={offerscl.offrParagraphContainer}>
            <p className={offerscl.offrParagraph}> Tuesdays 2-for-1 on all our ESPECIALIDADES. <br/> <br/>
            Sunday to Thursday 2-for-1 on all cocktails from 5 pm - 7 pm to cheer your evening up! </p>
        </div>
        
        
    </div>;
}

export default OffersPage;