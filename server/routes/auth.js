import express from 'express';

const router = express.Router();

router.post('/login', () => {
    user.auth(username, password, (account) => {
        console.log("user has been logged in", username, account)
    })
});

export default router;