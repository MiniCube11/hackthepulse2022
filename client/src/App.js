import { useEffect, useState } from 'react';

const Gun = require('gun/gun');
require('gun/sea')

const gun = Gun({
    peers: ['http://localhost:8000/gun']
})

const user = gun.user();

const signup = (username, password) => {
    user.create(username, password, (account) => {
        console.log("user has been created", username, account)
    })
}

const login = (username, password) => {
    user.auth(username, password, (account) => {
        if (account.err) {
            console.log(account.err);
        } else console.log("user has been logged in", username, account)
    })
}

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input type="text" placeholder="username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => login(username, password)}>Log In</button>
        </div>
    )
}

export default App;
