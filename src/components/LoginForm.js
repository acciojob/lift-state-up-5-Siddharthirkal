import React,{useState} from "react";
function LoginForm({onLogin}){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        onLogin();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom:"10px"}}>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div style={{marginBottom:"10px"}}>
                <label>Password: </label>
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;