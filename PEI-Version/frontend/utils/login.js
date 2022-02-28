// USER LOGIN WITH GITHUB
export async function signInWithGithub() {    
    try {
        // setLoading(true);
        const { user, error } = await supabase.auth.signIn({
        provider: 'github',
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        // setLoading(false);
        // props.router.push('/trilhas');
    }
    Router.push({
        pathname:'/trilhas',
    })
}

// Signup with Github
export async function signUpWithGithub() {    
    try {
        // setLoading(true);
        const { user, error } = await supabase.auth.signIn({
        provider: 'github',
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        // setLoading(false);
        // props.router.push('/trilhas');
    }
    Router.push({
        pathname:'/signform',
    })
}

// USER SIGNUP
export async function signUpWithEmail({ email, password, confirmPassword }){   
    
    if(password !== confirmPassword){
        return(
            alert("Passwords do not match!")
        );
    }
    
    try {
        // setLoading(true);u
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        // setLoading(false);
        // props.router.push('/trilhas');
    }
    Router.push({
        pathname:'/signform',
        arguments:{
            user: user
        }
    })
}

// USER LOGIN
export async function signInWithEmail({ email, password }){   
    
    try {
        // setLoading(true);u
        const { user, error } = await supabase.auth.signIn({
            email: email,
            password: password
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        // setLoading(false);
        // props.router.push('/trilhas');
        Router.push({
            pathname:'/trilhas',
            arguments:{
                user: user
            }
        })
    }
}