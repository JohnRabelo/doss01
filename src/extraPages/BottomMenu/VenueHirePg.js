import venuecl from './VenueHirePg.module.css'
import venueImg from '../../assets/images/dsPhotos/bottomMenuPagesPhotos/venueHire.jpg'

function VenuePage(){

    return <div className={venuecl.aboutDisplay}>

        <div>
            <img className={venuecl.abImgContainer} src={venueImg} alt="" />
        </div>
        <div>
            <p className={venuecl.abParagraph}> Located in central Brighton, Dos Sombreros has a restaurant and bar on the ground floor,
            with two additional top floors that are ideal for any private party. With a separate bar, table area, a small comfortable lounge and two bathrooms.

            Whether you have a birthday do, <span className={venuecl.greenText}>Christmas Party</span> or a private function, we would love to help. We can provide your guests with our superior cocktails
            and delicious cuisine, if food catering is required. Simply call our manager on <span className={venuecl.phNumber}>01273 911 455</span> for booking. </p>
        </div>
        
        
    </div>;
}

export default VenuePage;


