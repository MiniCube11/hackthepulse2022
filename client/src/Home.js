import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { gun, user } from './database';
import HospitalHome from './HospitalHome';
import GovernmentHome from './GovernmentHome';

const Home = () => {
    const navigate = useNavigate();
    const pubKey = user.is?.pub;
    const [accountData, setAccountData] = useState({});
    const [hospitalData, setHospitalData] = useState({});
    const [resources, setResources] = useState({});
    const [allHospitals, setAllHospitals] = useState({});
    const [hospitals, setHospitals] = useState({});

    useEffect(() => {
        if (!user.is) {
            navigate('/login');
        } 
    });

    gun.get(`account/${pubKey}`).on((account) => {
        if (account !== accountData) setAccountData(account);
    })

    if (accountData.isHospital) {
        gun.get(`hospital/${accountData.hospitalId}`).on((hospital) => {
            if (hospital !== hospitalData) {
                setHospitalData(hospital);
                setResources({});
                gun.get('hospital').get(accountData.hospitalId).map().on((resource, key) => {
                    setResources({ ...resources, [key]: resource });
                });
            }
        });
    } else {
        gun.get('hospital').on((data) => {
            if (allHospitals !== data) {
                setAllHospitals(data);
                setHospitals({});
                gun.get('hospital').map().once((data, hospitalId) => {
                    console.log({ name: "Hospital Name", id: hospitalId });
                    setHospitals({ ...hospitals, [hospitalId]: "Hospital Name" });
                });
            }
        })
    }

    console.log(hospitals)
    return (
        <div>
            {accountData.isHospital &&
                <HospitalHome name={accountData.hospitalName} resources={resources} />}
            {accountData.isGovernment &&
                <GovernmentHome hospitals={hospitals} />}
        </div>
    )
};

export default Home;