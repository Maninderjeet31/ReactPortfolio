import React, { useEffect, useState } from "react";
import { WorkExperience } from "../../data/WorkExperience";
import Work from "./Work";

function AllWork(){

    const [workExp, setWorkExp] = useState([]);

    useEffect(() => {
        WorkExperience.getWorkExp().then((data) => setWorkExp(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-3">
            <Work workExp={workExp}/>
        </div>
    )
}

export default AllWork;