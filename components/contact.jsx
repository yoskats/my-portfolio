import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact(props) {
    const {register, handleSubmit, errors, reset} = useForm();
    const [formStatus, setFormStatus] = useState('NOT_SENT');
    let FormComponent = '';

    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: '/api/contact-form',
            headers: {
                'Content-Type' : 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);

            if (response.status == 200) {
                setFormStatus('SENT_SUCCESSFULLY');
            }
            reset();
        } catch (err) {
            setFormStatus('SENT_FAILED');
        }
    }


    switch(formStatus) {
        case 'SENT_SUCCESSFULLY':
            FormComponent = (
                <div className="text-center h5 text-success my-3 my-sm-3 my-md-5" id="message-seccess">
                    <p> The message was sent successfilly! <br/> Thank you! <br/> I will be in touch &#128515; </p>
                </div>
            );
            break;
        case 'SENT_FAILED':
            FormComponent = (
                <div className="text-center h5 text-danger my-3 my-sm-3 my-md-5" id="message-failed">
                    <p>Oooopppsss... <br/> Server error, the message was not sent! <br/> Please try again in a few minutes or tomorrow &#x1F611; </p>
                </div>
            );
            break;
        case 'NOT_SENT':
        default:
            const validate = {
                name: register({ required: { value: true, message: 'oooppss, You forgot to fill your full name...' } }),
                email: register({ required: { value: true, message: 'oooppss, You forgot to fill the Email...' }, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "oooppss, the email isnt valid..." } }),
                subject: register({required:{value: true, message:'oooppss, You forgot to fill the subject...'}}),
                message: register({required:{value: true, message:'oooppss, so what you wanted to tell me?'}})
            };

            FormComponent = (
                <>
                    <div className="row w-100 justify-content-center mx-0">
                        <div className="col-sm-8 col-8 col-lg-6">
                            <div className="d-flex justify-content-center my-3 my-sm-3 my-md-5" id="let">
                                <h3 >Lets talk...</h3>
                            </div>
                            
                            <form onSubmit={handleSubmit(onSubmitForm)} className="form d-flex flex-column justify-content-center justify-content-around mb-3 mb-sm-3 mb-md-5" id="contact-form" action="/" method="POST">
                                <input type="text" id="fname" name="name" ref={validate.name} placeholder="Your full name..." />
                                <span id="err" className="text-danger text-sm py-1">
                                    {errors?.name?.message}
                                </span>
                                
                                <input type="email" id="email" name="email" ref={validate.email} placeholder="Your email..." />
                                <span id="err" className="text-danger text-sm py-1">
                                    {errors?.email?.message}
                                </span>
                                
                                <input type="text" id="subject" name="subject" ref={validate.subject} placeholder="Subject..." />
                                <span id="err" className="text-danger text-sm py-1">
                                    {errors?.subject?.message}
                                </span>
                                
                                <textarea type="text" id="message" name="message" ref={validate.message} placeholder="Write me something..." ></textarea>
                                <span id="err" className="text-danger text-sm py-1">
                                    {errors?.message?.message}
                                </span>
                                
                                <button className="mx-auto mb-3 mb-sm-3 mb-md-2" name="submit" type="submit" >Send</button>
                            </form>
                        </div>
                    </div>
    
                    <style jsx>{`
                        input[type=text],input[type=email], textarea {
                            padding: 12px;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            box-sizing: border-box;
                            margin-top: 6px;
                            margin-bottom: 16px;
                            resize: vertical;
                        }
                        
                        button[type=submit] {
                            background-color: #ab6364;
                            color: white;
                            padding: 12px 40px;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            
                        }
    
                        button[type=submit]:hover {
                            background-color: #b47272;
                        }
    
                        textarea {
                            height: 150px;
                        }
                        
                        h3 {
                            font-weight: 600;
                        }
    
                        @media (max-width: 768px) {
                            h3{
                                font-size: 26px;
                            }
                        }
                        
                        @media (max-width: 600px) {
                            h3{
                                font-size: 24px;
                            }
    
                            input[type=text],input[type=email], textarea {
                                padding: 4px;
                                margin-bottom: 0px;
                            }
                            
                            button[type=submit] {
                                padding: 6px 20px;
                            }
                        }
    
                        @media (max-width: 400px) {
                            h3 {
                                font-size: 22px;
                            }
    
                            span {
                                font-size: 12px;
                            }
                        }
                    `}</style>
                </>
            );
    }

    return (
        <>
            <section className="row w-100 flex-column mx-0" id="contact">
                <div id="headline-contact" className="headline col-12 mb-3 mb-sm-3 mb-md-4">
                    <h2 className="headline-title">Contact Me</h2>
                </div>

                {FormComponent}
            </section>

            <style jsx>{`
                #headline-contact {
                    background-image: url('/photos/amsterdam.jpg');
                    background-size: 100% 120%;
                }
                @media (max-width: 768px) {
                    #headline-contact{
                        min-height: 200px;
                    }
                }
                @media (max-width: 600px) {
                    #headline-contact{
                        min-height: 150px;
                    }
                }
            `}</style>
        </>
    );
}