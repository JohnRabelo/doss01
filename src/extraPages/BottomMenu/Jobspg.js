import jobscl from './Jobspg.module.css'
import jobsImg from '../../assets/images/dsPhotos/bottomMenuPagesPhotos/jobs.jpg'

function JobsPage(){

    return <div className={jobscl.aboutDisplay}>

        <div>
            <img className={jobscl.abImgContainer} src={jobsImg} alt="" />
        </div>
        <div>
            <p className={jobscl.abParagraph}> If you would like to join our energetic team, we will provide all the training you may need for the job.
             We are currently seeking a part-time chef to join our restaurant team.
              If you are an experienced cook, please email your CV across, or simply drop in to meet the manager. </p>
        </div>

              
    </div>;
}

export default JobsPage;