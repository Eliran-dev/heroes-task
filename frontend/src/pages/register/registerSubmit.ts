import React from 'react'

export const registrationSubmit = (email: string, pass: string) => {
    fetch('http://localhost:3000/auth/register', {
        method: 'POST', 
        body: new URLSearchParams({
            'email': email,
            'password': pass,
        })
    })
    .then((res) => res.status === 200 ? window.location.replace('/login') : console.log(res))
    .catch((err) => console.log(err.res.status))

}
