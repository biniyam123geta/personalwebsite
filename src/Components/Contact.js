import React, { Component,useRef }from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = (props) => {
  
   toast.configure();
    if(props.data){
      var name =props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state =props.data.address.state;
      var zip = props.data.address.zip;
      var phone= props.data.phone;
      var email = props.data.email;
      var message =props.data.contactmessage;
    }
    const sendEmails = (e) => {
      e.preventDefault();

      emailjs.sendForm('biniyam', 'template_i3tmn8m', e.target, '4csDfWnMCaxamLLoP')
        .then((result) => {
           console.log('sucess');
         toast("Emai Sent Successfully, Thank You");
       
        }, (error) => {
         toast("Error happened,");
       
        });
         e.target.reset();
    };
   return (
            <section id="contact">
      
               <div className="row section-head">
      
                  <div className="two columns header-col">
      
                     <h1><span>Get In Touch.</span></h1>
      
                  </div>
      
                  <div className="ten columns">
      
                        <p className="lead">{message}</p>
      
                  </div>
      
               </div>
      
               <div className="row">
                  <div className="eight columns">
      
                     <form  onSubmit={sendEmails}>
      					<fieldset>
      
                        <div>
      						   <label htmlFor="contactName">Name <span className="required">*</span></label>
      						   <input type="text" defaultValue="" size="35" id="name" name="name"/>
                        </div>
      
                        <div>
      						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
      						   <input type="text" defaultValue="" size="35" id="email" name="email"/>
                        </div>
      
                        <div>
      						   <label htmlFor="contactSubject">Subject</label>
      						   <input type="text" defaultValue="" size="35" id="subject" name="subject"/>
                        </div>
      
                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="message" name="message"></textarea>
                        </div>
      
                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
      					</fieldset>
      				   </form>
      
                 <div id="message-warning"> Error boy</div>
      				   <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
      				   </div>
                 </div>
      
      
                  <aside className="four columns footer-widgets">
                     <div className="widget widget_contact">
      
      					   <h4>Address and Phone</h4>
      					   <p className="address">
      						   {name}<br />
      						   {street} <br />
      						   {city}, {state} {zip}<br />
      						   <span>{phone},</span>
                           <span>{email}</span>
      					   </p>
      				   </div>
      
                
                  </aside>
            </div>
         </section>
          );
}
 
export default Contact;
