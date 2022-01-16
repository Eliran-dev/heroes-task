import { json } from 'body-parser'
import React from 'react'

export const loginSubmit = (email: string, pass: string) => {
    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: new URLSearchParams({
            'email': email,
            'password': pass,
        })
    })
    
        .then((res) => res.status === 200 ? res.json() : alert('WRONG'))
        .then((token => {
            console.log(token.user.access_token)
            sessionStorage.setItem('Authorization', `Bearer ${token.user.access_token}`)
        }))
}