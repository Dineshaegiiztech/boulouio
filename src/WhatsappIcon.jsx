// src/components/WhatsappIcon.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "/src/Chatbox.module.css";

const WhatsappIcon = ({ phoneNumber = "1234567890", size = 50, color = "#25D366", className = "" }) => {
    return (

        <div style={{float:"left", marginLeft: "12px", marginBottom: "40px"}}>
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                <FaWhatsapp size={size} color={color} />
            </a>
        </div>

    );
};

export default WhatsappIcon;
