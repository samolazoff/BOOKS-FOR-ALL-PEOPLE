import React from 'react';

import './login.sass';

const Login = () => {
    return (
        <section className='block-login container flx-c'>
            <h2 className='title-form'>Hello!</h2>
            <form action="" className='form-login flx-c'>
                <label htmlFor="" className='flx-c input-login'>
                    Login: 
                    <input type="text" />
                </label>
                <label htmlFor="" className='flx-c input-login'>
                    Password: 
                    <input type="password" />
                </label>
                <button type="submit" className='btn btn-login'>Enter</button>
            </form>
            
        </section>
    );
};

export default Login;