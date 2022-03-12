import Gun from 'gun/gun';
import { useEffect, useState } from 'react';

const gun = Gun({
    peers: ['http://localhost:8000/gun']
})

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={() => setUsername(username)}/>
            <input type="password" placeholder="password" value={password} onChange={() => setPassword(password)}/>
            <button onClick={() => signup(username, password)}>Sign Up</button>
            <button onClick={() => login(username, password)}>Log In</button>
        </div>
    )
}

export default App;
