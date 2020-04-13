import React, { useState, useEffect } from 'react';

import Contact from './contact';

import "./Contact.css"

const CONTACTS = [{
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male",
}, {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female",
}, {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666",
}, {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
}, {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male",
}, {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male",
}];

const Contacts = () => {

    const [contacts, setContacts] = useState(CONTACTS);
    const [search, setSearch] = useState('');
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [noGender, setNoGender] = useState(false);
    
    useEffect(
        () => {
            setContacts(CONTACTS.filter(({ firstName, lastName, phone, gender }) => {
                const tempSearch = search.toLowerCase();

                const searchResult = (firstName && firstName.toLowerCase().includes(tempSearch)) ||
                (lastName && lastName.toLowerCase().includes(tempSearch)) ||
                (phone && phone.toLowerCase().includes(tempSearch));

                const maleResult = isMale ? gender==='male' : true;
                const femaleResult = isFemale ? gender==='female' : true;
                const noGenderResult = noGender ? gender===undefined : true;

                return noGenderResult && femaleResult && searchResult && maleResult; 
            }))
        },
        [search, isMale, isFemale, noGender],
    )

    const handleSearchChange = ({ target: { value } }) => {
        setSearch(value);
    }
    const handleSearchGenderMale = ({ target: { checked } }) => {
        setIsMale(checked);
    }
    const handleSearchGenderFemale = ({ target: { checked } }) => {
        setIsFemale(checked);
    }
    const handleSearchGenderNoGender = ({ target: { checked } }) => {
        setNoGender(checked);
    }

    return (
        <>
            <div className="contacts-list">
                <div className="inputs">
                    <div className="input-text">
                        <input
                            onChange={handleSearchChange}
                            placeholder="Enter..."
                        />
                    </div>
                    <div className="input-checkbox">
                        <input 
                            type="checkbox"
                            onChange={handleSearchGenderMale}
                        />
                        - male
                    </div>
                    <div className="input-checkbox">
                        <input 
                            type="checkbox"
                            onChange={handleSearchGenderFemale}
                        />
                        - female
                    </div>
                    <div className="input-checkbox">
                        <input 
                            type="checkbox"
                            onChange={handleSearchGenderNoGender}
                        />
                        - no gender
                    </div>
                </div>
                <div className="quantity-contacts">
                    found - {contacts.length} contacts
                </div>
                <div className="contacts">
                    {
                        contacts.map((contact, index) => {
                            return (
                                <Contact
                                    key={index}
                                    {...contact}
                                />
                            )
                        })
                    }
                </div>
            </div>    
        </>
    );
}

export default Contacts;