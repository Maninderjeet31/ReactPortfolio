import React, { useEffect, useState } from "react";
import { Projects } from "../../data/Projects";
import Project from './Project'

function AllProjects(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Projects.getProjects().then((data) => setProjects(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-2">
            <h1 className="display-3 fw-bolder mt-5 text-secondary">Hands-On Experience</h1>
            <p className=" text-info text-wrap fw-bold mt-4 fs-6">
                INDEPENDENT PROJECTS
            </p>
            <Project projects={projects} />
        </div>
    )
}

export default AllProjects;