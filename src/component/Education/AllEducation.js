import React, { useEffect, useState } from "react";
import { EducationData } from "../../data/EducationData";
import Education from "./Education";

function AllEducation(){

    const [education, setEducation] = useState([]);

    useEffect(() => {
        EducationData.getEducation().then((data) => setEducation(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-2">
            <h1 className="display-3 fw-bolder mt-5 text-secondary">Education</h1>
            <p className=" text-info text-wrap fw-bold mt-4 fs-6">
                EDUCATION LEVELS
            </p>
            <Education education={education}/>
        </div>
    )
}

export default AllEducation;