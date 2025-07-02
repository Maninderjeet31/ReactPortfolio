import React, { useEffect, useState } from "react";
import { WorkExperience } from "../../data/WorkExperience";
import Work from "./Work";

function AllWork(){

    const [workExp, setWorkExp] = useState([]);

    useEffect(() => {
        WorkExperience.getWorkExp().then((data) => setWorkExp(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-2">
            <h1 className="display-3 fw-bolder mt-5 text-secondary">Work Experience</h1>
            <p className=" text-info text-wrap fw-bold mt-4 fs-6">
                ON-SITE EXPERIENCE
            </p>
            <Work workExp={workExp}/>
        </div>
    )
}

export default AllWork;