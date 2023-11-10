import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className='container-FormAddContact'>
            <h2 className='title-AddANewContact'>Add a new Contact</h2>
            <div className='container-form mx-auto w-50'>
                <form id='contact-form' className='form-card'>
                    <div className='container-input-text'>
                        <label>Full Name</label>
                        <input type='text' placeholder='Full Name' id='fName' name='full_name' className='input-details' />
                        <label>Email</label>
                        <input type='text' placeholder='Email' id='email' name='email' className='input-details' />
                        <label>Phone</label>
                        <input type='text' placeholder='Phone' id='phone' name='phone' className='input-details' />
                        <label>Address</label>
                        <input type='text' placeholder='Address' id='address' name='address' className='input-details' />
                        <button className='btn w-100 registerButton' onClick={() => actions.handleForm(e)}>Register</button>
                        <Link to="/book">
                            <p className="linkBackToContacts">or get back to contacts</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}