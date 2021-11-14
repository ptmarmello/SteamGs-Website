import React from 'react';

function login(props) {

    return (
        <div className="login-page">
            <div className="form">
                <form class="login-form">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    {/* create Google Oauth */}
                    {/* create Github Oauth */}
                    <section>
                        <button>Google</button>
                        <button>Github</button>
                    </section>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    );
}

export default login;