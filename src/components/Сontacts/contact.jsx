import React from 'react';

const Contact = ({firstName, lastName, phone, gender}) => {
    return (
        <div className="contact">
            <ul>
                <li className="firstName">{firstName}</li>
                <li className="lastName">{lastName}</li>
                <li className="phone">{phone}</li>
                {
                    gender && <li className="gender">{gender}</li>
                }
            </ul>
        </div>
    );
}

export default Contact;