import React from "react";

function Project() {

    return (
        <>
            <section class="aboutme d-flex flex-column">
                <h2 id="aboutme">Projects</h2>
                <p class="aboutme">
                <section class="card-deck justify-content-center align-content-center" id="projects">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card card text-center" id="p1">
                            <div class="card-body">
                                <h5 class="card-title">Day Planner</h5>
                                <p class="card-text">A planner for work hours that is color coded according to the time
                                    (past, present, future).</p>
                                <a href="https://boldsja.github.io/day-planner/" class="btn btn-primary">See Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card card text-center" id="p2">
                            <div class="card-body">
                                <h5 class="card-title">Buzzwords</h5>
                                <p class="card-text">A group project that generates a random book and cocktail based
                                    upon user input.</p>
                                <a href="https://caitlinscodes.github.io/group_project_one/" class="btn btn-primary">See
                                    Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card card text-center" id="p3">
                            <div class="card-body">
                                <h5 class="card-title">Password Generator</h5>
                                <p class="card-text">Generates password based on the criteria specified(number of
                                    characters, symbols, etc.).</p>
                                <a href="https://boldsja.github.io/PasswordGenerator/" class="btn btn-primary">See
                                    Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </p>
            </section>
        </>
    )
}

export default Project;