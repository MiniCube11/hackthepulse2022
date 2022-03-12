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

        if (data.isHospital) {
            gun.get('hospital').put(data.hospitalId).put({ "Masks": { "used": 0, "total": 0, "demand": 0 } });
        }
                
    })
}

const data = {
    name: "Ontario Government",
    isGovernment: true,
    isHospital: false,
}

// signup("ontgov", "password", data)