import { useEffect } from 'react';
import "./login.css"

const Login = () => {

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        const loginData = () => {
            fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                })
            }).then((res) => {
                console.log(res.json())
            })
        }

        loginData();
    }, [])

    return (
        <div className='login_wrapper'>
            <div className='form_box login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input_box'>
                        <span></span>
                        <input readonly name='username' type="email" onChange={handleChange} autoComplete='off' />
                        <label htmlFor="username">User Name</label>
                    </div>

                    <div className='input_box'>
                        <input name='password' id='password' type="password" onChange={handleChange} />
                        <label htmlFor="password"> Password </label>
                    </div>

                    <div>
                        <button className='login_regisger'>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;