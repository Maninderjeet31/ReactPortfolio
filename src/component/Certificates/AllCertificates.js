import React, { useEffect, useState } from "react";
import { Certificates } from "../../data/Certificates";
import Certificate from "./Certificate";

function AllCertificates(){

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        Certificates.getCertificates().then((data) => setCertificates(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-5">
            <Certificate certs={certificates} />
        </div>
    )
}

export default AllCertificates;