import React from "react";
import yoru from "../assets/images/yoru1.jpg"
import "../assets/css/main.css"
function Contact() {

    return (
        <>
            <section class="aboutme d-flex flex-column">
                <p><img class="card me" src={yoru} alt="my avatar from bleach" height={300} width={300}  /></p>
                <h2 id="aboutme">Contact</h2>
                <p class="aboutme">Contact page will be here.
                </p>
            </section>
        </>
    )
}

export default Contact;