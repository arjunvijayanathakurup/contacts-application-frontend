import { useState } from "react";

function useAuthentication() {
    const signupUser = async (credentials) => {
        return fetch(`${process.env.REACT_APP_API_URL}users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const signInUser = async (credentials) => {
        return fetch(`${process.env.REACT_APP_API_ROOT_URL}token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    return {
        signUp: signupUser,
        signIn: signInUser,
    }
}


export default useAuthentication;