import React from "react";
import yoru from "../assets/images/yoru1.jpg"
import "../assets/css/main.css"
function Contact() {

    return (
        <>
            <section class="aboutme d-flex flex-column">
                <p><img class="card me" src={yoru} alt="my avatar from bleach" height={300} width={300}  /></p>
                <h2 id="aboutme">Contact</h2>
                <ul><h2>
                    <li><a href="https://github.com/boldsja"> My Github</a></li>
                    <li><a href="https://www.linkedin.com/in/jasmine-bolds"> LinkedIn</a></li>
                    <li><a href="mailto:boldsja@gmail.com">Email</a></li>
                    <li><a href="./assets/Coding Resume.pdf" download>Resume</a> </li>
                    </h2>
                </ul>
            </section>

        </>
    )
}

export default Contact;