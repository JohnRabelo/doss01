import {useRef} from 'react';

import formcl from './Form.module.css'






function NewForm(props){

    const titleInputRef = useRef();
    const emailInputRef = useRef();
    const subjectInputRef= useRef();
    const messageInputRef= useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value; {/* gets the current values of this tag right after hitting the submit button */}
        const enteredEmail= emailInputRef.current.value;
        const enteredSubject= subjectInputRef.current.value;
        const enteredMessage= messageInputRef.current.value;

        const FormData = {
            title: enteredTitle,
            email: enteredEmail,
            subject: enteredSubject,
            message: enteredMessage,
        };
        props.onSendFormData(FormData); {/*And stores on FormData to be sent to POST Firebase as function parameter(see props logic react draft email)*/}
    }

    
    return <div>
        <div className={formcl.formLayout} >

            <form className={formcl.forms}  onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name' >Your Name (required)</label>
                    <input type="text" required id="name" ref={titleInputRef} />  
                </div> 
                <div>
                    <label htmlFor='email' >Your Email (required)</label>
                    <input type="email" required id="email" ref={emailInputRef}/>  {/* Change default email message*/}
                </div> 
                <div>
                    <label htmlFor='subject' >Subject</label>
                    <input type="text" id="subject" ref={subjectInputRef} />  
                </div> 
                <div>
                    <label htmlFor='message' >Your Message</label>
                    <textarea id='message' required ref={messageInputRef} ></textarea>  
                </div> 
                <div>
                    <button>Send</button>
                </div>

            </form>

        </div>
    </div>;
}

export default NewForm;