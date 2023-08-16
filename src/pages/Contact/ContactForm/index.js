
import { Component } from "react";


import "./index.css";


class ContactForm extends Component{
    render(){
        return(

            <section class="contactFormContainer">
                <div className="contactFormWrapper">
                    <div className="contactForm">
                        <form>
                            <input type="text" id="fname" name="fname" placeholder="Name"></input>
                            <input type="email" id="femail" name="fname" placeholder="Email"></input>
                            <textarea type="text" id="ftextArea" name="fname" placeholder="Message"></textarea>
                            <button className="formSubmit">Submit</button>
                        </form>
                    </div>
                </div>
           </section>  
        )
    }  
}
         
export default ContactForm;  