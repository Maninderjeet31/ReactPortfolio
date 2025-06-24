import React, { useEffect, useState } from "react";
import { Projects } from "../../data/Projects";
import Project from './Project'

function AllProjects(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Projects.getProjects().then((data) => setProjects(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-5">
            <Project projects={projects} />
        </div>
    )
}

export default AllProjects;