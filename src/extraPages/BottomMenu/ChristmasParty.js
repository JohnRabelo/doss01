import christmascl from './ChristmasParty.module.css'
import christmasImg from '../../assets/images/dsPhotos/bottomMenuPagesPhotos/christmas.png'


function ChristmasPage(){

    return <div className={christmascl.aboutDisplay}>

        <div>
            <img className={christmascl.abImgContainer} src={christmasImg} alt="" />
        </div>
        <div>
            <p className={christmascl.abParagraph}> If you want to have a private Christmas Party for your work colleagues and friends,
             simply get in touch. Let us know the total number of guests, your dietary requirements and the date of booking.
                <br/><br/>We’ll make sure you have a grand party with our delicious cuisine. The sombreros are on us!!! </p>
        </div>
    </div>;
}
export default ChristmasPage;