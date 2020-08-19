import React from 'react'


class Signupinfo extends React.component {
    render() {
        return (
            <div>
                <p>Username</p>
                <input type="text" />
                <p>Password</p>
                <input type="password" />
                <p>Email</p>
                <input />
                <p>Gender</p>
                <ul>
                    <li>Male</li>
                    <li>Female</li>
                    <li>Nonbinary</li>
                </ul>
            </div>
        );
    }
}

export default Signupinfo