import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { userList } from '../shared/userData';

export default function NewList( props ) {
    
    // destructure props, set states and variables
    const { data, handleNewList, userInfo } = props;
    const [ formData, setFormData ] = useState({
        listID: "",
        listName: "",
        listDesc: "",
        listItems: []
    });
    const navigate = useNavigate();

    // set input handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((d) => ({
            ...d,
            [name]: value,
        }));
    };

    return (
        <div className="modal make-new">
            <button className="close square" onClick={handleNewList}><i className="fa-solid fa-xmark"></i></button>
            <div id="new-list-header">
                <h2>Create New List</h2>
            </div>
            <form name="new-list" id="new-list" className="col">
                <label>LIST NAME
                    <input type="text" id="list-name" name="listName" onChange={handleChange} autoFocus required/>
                </label>
                <label>DESCRIPTION
                    <textarea id="list-info" name="listDesc" rows="5" onChange={handleChange} required />
                </label>
                <button className="submit-btn" onClick="">SUBMIT</button>
            </form>
        </div>
    );
}