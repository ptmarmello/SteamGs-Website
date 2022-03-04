import { supabase } from "../utils/supabaseClient";
import Router from "next/router";

// USER LOGIN WITH GITHUB
export async function signInWithGithub() {    
    try {
        const { user, session, error } = await supabase.auth.signIn({
        provider: 'github',
        });
        if (error){
            throw error;  
        }else{
            Router.push({
                pathname:'/tracks',
            })
        }
    } catch (error) {
        console.log(error.error_description || error.message);
    } finally {
        Router.push({
            pathname:'/tracks',
        })
    }
}

// Signup with Github
export async function signUpWithGithub() {    
    try {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'github',
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        Router.push({
            pathname:'/signform',
        })
    }
}

// USER SIGNUP
export async function signUpWithEmail({ email, password, confirmPassword }){   
    
    if(password !== confirmPassword){
        return(
            alert("Passwords do not match!")
        );
    }
    try {
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        Router.push({
            pathname:'/signform',
        })
    }
}

// USER LOGIN
export async function signInWithEmail({ email: email, password: password }){   
    
    try {
        // setLoading(true);u
        const { user, session, error } = await supabase.auth.api.signInWithEmail({
            email: email,
            password: password
        });
        if (error) throw error;
    } catch (error) {
        alert(error.error_description || error.message);
        Router.push({
            pathname:'/signup',
        })
    } finally {
        Router.push({
            pathname:'/tracks',
        })
    }
}