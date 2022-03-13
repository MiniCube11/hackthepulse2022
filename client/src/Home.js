import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

    if (user.is) {
        gun.get(`account/${pubKey}`).on((account) => {
            if (account !== accountData) setAccountData(account);
        });
    
        if (accountData.isHospital) {
            gun.get(`hospital/${accountData.hospitalId}`).on((hospital) => {
                if (hospital !== hospitalData) {
                    setHospitalData(hospital);
                    setResources({});
                    gun.get('hospital').get(accountData.hospitalId).map().on((resource, key) => {
                        setResources(prev => ({ ...prev, [key]: resource }));
                    });
                }
            });
        } else {
            gun.get('hospital').on((data) => {
                if (allHospitals !== data) {
                    setAllHospitals(data);
                    setHospitals({});
                    gun.get('hospital').map().once((data, hospitalId) => {
                        setHospitals(prev => ({ ...prev, [hospitalId]: "Hospital Name" }));
                    });
                }
            });
        }
    }

    return (
        <Page>
            {accountData.isHospital &&
                <HospitalHome name={accountData.hospitalName} resources={resources} />}
            {accountData.isGovernment &&
                <GovernmentHome hospitals={hospitals} />}
        </Page>
    )
};

const Page = styled.div`
    padding: 60px 60px;
`

export default Home;