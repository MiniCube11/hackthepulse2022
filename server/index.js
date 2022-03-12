const express = require('express');
const Gun = require('gun');
require('gun/sea');

const app = express();
const PORT = 8000;

app.use(Gun.serve);

const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

const gun = Gun({ web: server });
const user = gun.user();

const signup = (username, password) => {
    // Create user account
    user.create(username, password, (account) => {
        console.log("user has been created", username, account)
    })
}
