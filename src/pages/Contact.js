import {useNavigate} from 'react-router-dom';

import contactcl from './Contact.module.css'
import NewForm from '../components/Forms/Form';



function ContactPage(){

    const history = useNavigate();

    function sendFormHandler(formsData){ {/*The only time we actually use firebase(if you wanna use other backend)*/}
        fetch('https://dsbr-44c45-default-rtdb.firebaseio.com/customersMessages.json',   
        {
            method: 'POST',
            body: JSON.stringify(formsData),
            headers: {
                'Content-Type': 'application/json'
            } 
        }
        ).then(()=>{
            history('/')
        });  {/*Sent the FORM->FormData to firebase through sendFormHandler function*/}

    }


    return <div>
        <div className={contactcl.mapsContainer}>
            <iframe className={contactcl.maps}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.490253556647!2d-0.14387618404627003!3d50.82208246839767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850ba0669c41%3A0xf8c2c9d9011e8ab!2sDos%20Sombreros!5e0!3m2!1sen!2sie!4v1681155619625!5m2!1sen!2sie" 
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
 
        <div className={contactcl.preOrderText}>
            <p>If you want to get in touch with us then we'd love to hear from you.
                If you're looking to make a reservation then please just give us a call and you can also <span className={contactcl.oGreenText}>pre-order your food</span>.</p>
        </div>

        <div className={contactcl.contactMenu}>
            <a>01273 911 881</a>
            <a href='mailto:hola@dossombreros.co.uk'>EMAIL US</a>
            <a href='https://twitter.com/DosSombreros' target='_blank'>TWITTER</a>
            <a href='https://www.facebook.com/DosSombrerosMexicanRestaurant?fref=ts' target='_blank'>FACEBOOK</a>
        </div>
        
        <div className={contactcl.formContainer}>
            {/*<p className={contactcl.formsAlternative}>ALTERNATIVELY YOU CAN GET IN TOUCH BY FILLING OUT THE CONTACT FOR</p>
            <NewForm onSendFormData={sendFormHandler} />
            <p className={contactcl.formsDisclaimer}>* All data submitted remains private. Complying with our <span className={contactcl.oGreenText}>privacy policy</span> and <span className={contactcl.oGreenText}>website terms</span>.</p>*/}
        </div>



    </div>;
}

export default ContactPage;