import aboutcl from './About.module.css'
import abImg from '../assets/images/dsPhotos/about/a1.jpg'
import { Link } from 'react-router-dom';

function AboutPage(){
    return <div className={aboutcl.aboutDisplay}>
        <head>
            <meta charset="UTF-8" />
            <title>Dos Sombreros</title>
            <link href="https://fonts.googleapis.com/css2?family=Bitter&family=Sanchez&display=swap" rel="stylesheet"/>
        </head>
        <div className={aboutcl.abImgContainer}>
            <img className={aboutcl.abImgItem} src={abImg} alt="" />
        </div>
        <div className={aboutcl.abParagraphContainer}>
            <p className={aboutcl.abParagraph}>  Dos Sombreros opened its doors in the spring of 2012 in the heart of the bustling south lanes of Brighton. 
                In the autumn of 2013 we opened our ‘Day of the Dead’ themed tequila and cocktail bar above the restaurant. 
                Containing original pieces of artwork from Jony Daga (check out his work in our <Link to='/gallery' className={aboutcl.greenText}>gallery</Link> section). <br /><br />

                Dos Sombreros tequila and cocktail bar opened on the third floor of our <Link to='/' className={aboutcl.greenText}>Mexican restaurant</Link> in November 2013. 
                A perfect place to have drinks if you are waiting for friends to arrive, or a <span className={aboutcl.greenText}>private party</span>. 
                We also offer tequila tastings and cocktail classes.<br /><br />

                If you are interested in joining our growing team, please visit our <span className={aboutcl.greenText}>jobs</span>‘ page.<br /><br />

                For reservations, kindly call us on <span className={aboutcl.phNumber}>01273  911 881</span>.</p>
        </div>
    </div>;
}

export default AboutPage;