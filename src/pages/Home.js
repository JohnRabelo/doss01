import homecl from './Home.module.css';
import openingTimes from '../assets/images/dsPhotos/banner/openingTimes.JPG'
import homeMap from '../assets/images/dsPhotos/banner/maps/homeMap.png'
import homeAddress from '../assets/images/dsPhotos/banner/homeAddress.jpg'
import lizzard from '../assets/images/dsPhotos/banner/lizzard.JPG'
import tripAdvisor from '../assets/images/dsPhotos/banner/tripAdvisor.JPG'
import { Link } from 'react-router-dom';

import bannerImg from '../assets/images/dsPhotos/banner/bannerPhoto.JPG'



function HomePage(){
    return <div>





            <html>
            <head>
                <meta charset="UTF-8" />
                <title>Dos Sombreros</title>
                <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1' />
                <link href="https://fonts.googleapis.com/css2?family=Bitter&family=Sanchez&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <main>
                    <section className={homecl.banner}>
                        <div className={homecl.bannerContainer}>
                            <img src={bannerImg} alt='' />
                        </div>
                    </section>
                    <section className={homecl.homePage} >
                        <div className={homecl.sectionDescription}>Welcome to Dos Sombreros! Brighton's best Mexican restaurant, <br/> serving up sizzling fajitas and margaritas all year round.
                        <br/><br/>
                        <span className={homecl.redText}>Whether enjoying a romantic meal for two or partying with a large group of friends, we'll make<br/> 
                            sure you have a fantastic time! Dos Sombreros is also a perfect place for a <span className={homecl.greenText}>drink</span> or <span className={homecl.greenText}>party</span>!<br/><br/>
                            You can now enjoy our <span className={homecl.greenText}>food at home</span>. Read more <span className={homecl.greenText}>about us</span>…</span>
                        </div>
                        <div className={homecl.homeAddress}>
                            <img className={homecl.homeAddressLink} src={openingTimes} alt=""/>
                            <a href='https://www.google.com/maps/place/24+Ship+St/@50.821697,-0.1421952,17z/data=!3m1!4b1!4m2!3m1!1s0x4875850b9bd9c6dd:0xb25950ed71f34dfb' target="_blank"> <img className={homecl.homeAddressLink} src={homeMap} alt=""/> </a>
                            <img className={homecl.homeAddressLink} src={homeAddress} alt=""/>
                        </div>
                    </section>
                    <div className={homecl.lizzard}>
                        <img src={lizzard} alt=""/>
                    </div>
                    <div className={homecl.bienvenido}>
                        Our friendly team hope to welcome you soon. Siempre bienvenido!
                    </div>
                    <div className={homecl.tripAdvisor}>
                        <a href='https://www.tripadvisor.co.uk/Restaurant_Review-g186273-d3163717-Reviews-Dos_Sombreros-Brighton_East_Sussex_England.html' target='_blank'><img src={tripAdvisor} alt=""/></a>
                    </div>
                </main>
            </body>
            </html>










    </div>;
}

export default HomePage;