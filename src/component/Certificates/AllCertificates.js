import React, { useEffect, useState } from "react";
import { Certificates } from "../../data/Certificates";
import Certificate from "./Certificate";

function AllCertificates(){

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        Certificates.getCertificates().then((data) => setCertificates(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <div className="pt-2">
            <h1 className="display-3 fw-bolder mt-5 text-secondary">Certifications</h1>
            <p className=" text-info text-wrap fw-bold mt-4 fs-6">
                CERTIFICATIONS ACHIEVED
            </p>
            <Certificate certs={certificates} />
        </div>
    )
}

export default AllCertificates;