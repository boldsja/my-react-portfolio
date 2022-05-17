import React from "react";
import yoru from "../assets/images/yoru1.jpg"
 function Home() {

    return (
        <>
            <section class="aboutme d-flex flex-column">
                <p><img class="card me" src={yoru} alt="my avatar from bleach" /></p>
                <h2 id="aboutme">About Me</h2>
                <p class="aboutme">Hi, my name is Jasmine, and I'm currently a student in SMU's Coding Bootcamp. I have
                    been working as an
                    ICU RN for the past 6 years. I look forward to learning new skills and transitioning into a new
                    career!
                </p>
            </section>
        </>
    )
}

export default Home;