import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {
    console.log(styles);
 const [name,SetName] =useState('Somebody');
 const [email,SetMail] =useState('someone@somemail.com');
 const [text,SetText] =useState('Sample text');
    const onViaCall=()=>{
      console.log("Calling");
    };
    const onViaChat=()=>{
      console.log("Redirecting to Chat");
    };
    const onViaEmail=()=>{
      console.log("Redirecting to Mail");
    };
    const onSubmit=(event)=>{
      event.preventDefault();
      SetName(event.target[0].value);
      SetMail(event.target[1].value);
      SetText(event.target[2].value);
      console.log("name",name);
      console.log("email",email);
      console.log("text",text);
    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
        <Button  onClick={onViaChat}text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button onClick={onViaCall} text="VIA CALL" icon={<HiPhone fontSize="24px"/>}/>
        </div>
        <Button onClick={onViaEmail} isoutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit} className={styles.contact_form}>
          <div className={styles.formcontainer}>
            <label htmlFor='name'>NAME</label>
            <input type='text' name='name'></input></div>
            <div className={styles.formcontainer}>
            <label htmlFor='email'>EMAIL</label>
            <input type='text' name='email'></input></div>
            <div className={styles.formcontainer}>
            <label htmlFor='text'>TEXT</label>
            <textarea name='text'rows='8' />
            </div>
            <div style={{display:'flex',justifyContent:"end"}}>
            <Button text="SUBMIT"/>
            </div>
            <div>{name+" "+email+" "+text}</div>
            </form>
            
        </div>
        <div className={styles.contact_image}>
           <img src="images/contact.svg" alt='contact'></img> 
        </div>
    </section>
  )
}

export default ContactForm