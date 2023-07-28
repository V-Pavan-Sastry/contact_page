import React from 'react'
import styles from './Button.module.css'
import {MdMessage} from "react-icons/md"
const Button = (props) => {
    console.log(props);
  return  (<button onClick={props.onClick} className={props.isoutline ? styles.out_btn :styles.primary_btn}>
       {props.icon} {props.text}
    </button>);
  
}

export default Button;