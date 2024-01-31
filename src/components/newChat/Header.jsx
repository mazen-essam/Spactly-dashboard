import React from 'react'
import './header.css'
import main_logo from "../../assets/images/logo only main.svg";

export default function Header() {
    return (
        <div className="chat-heading w-50 me-auto ms-auto text-center ">
            <div className="img  m-auto text-center">
                <img src={main_logo} alt="" />
            </div>
            <h3>كيف استطيع مساعدتك اليوم؟</h3>
        </div>
    )
}
