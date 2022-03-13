const express = require('express');
const Gun = require('gun');
require('gun/sea');

const app = express();
const PORT = 8000;

app.use(Gun.serve);

const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

const gun = Gun({ web: server });
const user = gun.user();

const signup = (username, password, data) => {
    // Create user account
    user.create(username, password, (account) => {
        console.log(account.pub)
        gun.get("account").get(account.pub).put(data);

        // if (data.isHospital) {
        //     gun.get('hospital').get(data.hospitalId).put({ "Masks": { "used": 0, "total": 0, "demand": 0 } });
        // }
                
    })
}

const data = {
    name: "Ada Murry",
    isGovernment: false,
    isHospital: true,
    hospitalId: "grandriverhospital",
    hospitalName: "Grand River Hospital"
}

const addfake = () => {
    signup("adamurry112", "password", data);
    gun.get('hospital').get("grandriverhospital").put({ "Masks": { "used": 675, "total": 1000, "demand": 0 } });
    gun.get('hospital').get("grandriverhospital").put({ "First aid kits": { "used": 89, "total": 100, "demand": 0 } });
    gun.get('hospital').get("grandriverhospital").put({ "Gloves": { "used": 999, "total": 1000, "demand": 0 } });
    gun.get('hospital').get("grandriverhospital").put({ "Surgical supplies": { "used": 392, "total": 1000, "demand": 0 } });
}

// addfake();
// signup("ontgov", "password", data)