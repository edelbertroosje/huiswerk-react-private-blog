import React from 'react';
import { useHistory} from "react-router-dom";


function Login() {
    const history = useHistory();

    function login () {
        console.log('ik ben ingelogd');
        history.push('/');
    }
    return (
        <>
            <h1>Login Pagina</h1>
            <p>druk op de knop om in te loggen</p>

            <button type="button" onClick={login}>
                Inloggen
            </button>

        </>
    );
}

export default Login;