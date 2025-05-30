import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

export default function NewItem( props ) {
    const { data, userInfo, userList, closeModal } = props;
    const formRef = useRef(null);
    const [ formInfo, setFormInfo ] = useState({
        itemID: "",
        itemName: "",
        itemCost: "",
        itemURL: "",
        itemImg: "/src/assets/default-img.png",
        quantity: null
    });
    
    // set input handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormInfo((d) => ({
            ...d,
            [name]: value,
        }));
    };
    
    // submit new item to page
    const submitNewItem = (e) => {
        e.preventDefault();

        // capture indexes of current list inside listItems array and current user inside data
        const listIndex = userInfo.lists.findIndex((i) => i.listID === userList.listID);
        const userIndex = data.findIndex((i) => i.userID === userInfo.userID);

        // add itemID to new item object
        formInfo.itemID = `${userList.listID}-${Math.floor(Math.random() * 900) + 100}`;

        // add new item to the list inside userInfo inside data
        data[userIndex].lists[listIndex].listItems.push(formInfo);

        // push to localStorage
        localStorage.setItem('fakeData', JSON.stringify(data));

        closeModal();
    }


    return (
        <div className="modal make-new">
            <button className="close square" onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
            <div id="new-item-header">
                <h2>Create New Item</h2>
            </div>
            <form name="new-item" id="new-item" className="col" ref={formRef} method="post" onSubmit={submitNewItem}>
                <label>ITEM NAME
                    <input type="text" id="item-name" name="itemName" onChange={handleChange} autoFocus required/>
                </label>
                <label>ITEM URL
                    <input type="url" id="item-URL" name="itemURL" onChange={handleChange} required/>
                </label>
                <label>IMAGE URL
                    <input type="url" id="link-image" name="itemImg" onChange={handleChange} />
                </label>
                <div id="cost-count-inputs" className="row">
                    <label className="grow">COST
                        <input type="number" step="0.01" id="item-cost" name="itemCost" onChange={handleChange} required/>
                    </label>
                    <label className="grow">QUANTITY
                        <input type="number" id="item-count" name="quantity" onChange={handleChange} />
                    </label>
                </div>
                <div id="new-image">
                    <img src={!formInfo.itemImg ? "/src/assets/default-img.png" : formInfo.itemImg} className="img-reg" />
                </div>
                <button className="submit-btn" >SUBMIT</button>
            </form>
        </div>
    );
}