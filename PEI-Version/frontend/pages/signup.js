import React from 'react';

function signup(props) {
    // implement auth signup page

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Seu email"
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Sua senha"
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirme sua senha"
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <button onClick={() => props.history.push('/')}>
                        Signup
                    </button>
                </div>
                <section>
                    <button>Google</button>
                    <button>Github</button>
                </section>
            </form>
        </div>
    );

}

export default signup;