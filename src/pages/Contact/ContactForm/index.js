
import React, {useState} from "react";


import "./index.css";


const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const [messageSent, setMessageSent] = useState(false);
    const [sendingError, setSendingError] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


    try {
        const response = await fetch('http://localhost:1337/api/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              data: {
                type: "email", // This is an assumption. Adjust if needed.
                attributes: formData
              }
            })
          });  
          
        if (response.ok) {
          setMessageSent(true);
        } else {
          const errorData = await response.json();
          setSendingError(errorData.message || 'Failed to send message.');
        }
  
      } catch (error) {
        setSendingError(error.message || 'An error occurred.');
      }
  
    }

        return(

            <section class="contactFormContainer">
                <div className="contactFormWrapper">
                    <div className="contactForm">
                    {messageSent ? (
                        <p>Message sent successfully!</p>
                    ) : (
                        <form>
                            <input type="text" id="fname" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}></input>
                            <input type="email" id="femail" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}></input>
                            <textarea type="text" id="ftextArea" name="message" placeholder="Message" value={formData.message} onChange={handleInputChange}></textarea>
                            <button onClick={handleSubmit} className="formSubmit">Submit</button>
                        </form>
                    )}
                    {sendingError && <p>{sendingError}</p>}
                    </div>
                </div>
           </section> 
           
    
        )
        }
         
export default ContactForm;    