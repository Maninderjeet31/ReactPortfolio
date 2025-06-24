import React, { useEffect, useState } from "react";
import { EducationData } from "../../data/EducationData";
import Education from "./Education";

function AllEducation(){

    const [education, setEducation] = useState([]);

    useEffect(() => {
        EducationData.getEducation().then((data) => setEducation(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-3">
            <Education education={education}/>
        </div>
    )
}

export default AllEducation;