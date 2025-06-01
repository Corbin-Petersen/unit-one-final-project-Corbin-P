import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import NewList from "./NewList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Lists( props ) {
    // pull in params and set variables
    const { userID, listID } = useParams();
    const { data, loggedIn, setLoggedIn } = props;
    const newListRef = useRef(0);
    const deleteListRef = useRef(0);
    const [ isVisible, setIsVisible ] = useState(false);
    
    const userInfo = data.find(user => user.userID == userID);
    console.log(userInfo);
    // functions to handle modals
    const handlePopup = (refs) => {
        !isVisible ? (
            document.body.style.overflow = "hidden",
            refs.current.style.display = "flex",
            setTimeout(() => {
                refs.current.style.opacity = "1",
                refs.current.lastElementChild.style.transform = "translateY(0px)"
            }, 1)
        ) : (
            refs.current.style.opacity = "0",
            refs.current.lastElementChild.style.transform = "translateY(-25px)",
            document.body.style.overflow = "visible",
            setTimeout(() => {
                refs.current.style.display = "none";
            }, 250)
        );
        setIsVisible(!isVisible);
    }

    // function to delete lists
        const deleteList = () => {
        
        // capture indexes of current item, listItems, and userInfo
        const listIndex = userInfo.lists.findIndex((i) => i.listID === listID);
        const userIndex = data.findIndex((i) => i.userID === userInfo.userID);

        // remove item from userList inside userInfo inside data
        data[userIndex].lists.splice(listIndex, 1);

        // update localStorage
        localStorage.setItem('fakeData', JSON.stringify(data));

        handlePopup(deleteListRef);
    }
    let theseLists =  userInfo.lists.map(list => 
    list.listItems.length
    )
    console.log(theseLists);

    return (
        <div className="component col">
            <div id="list-welcome">
                <h2>Hello {userInfo.firstName}!</h2>
            </div>
            <div id="lists-list" className="col">
                <div id="lists-header" className="row">
                    <h3>YOUR LISTS</h3>
                    <button id="new-list-btn" className="square" title="new list" onClick={() => handlePopup(newListRef)}><i className="fa-solid fa-plus"></i></button>
                </div>
            {userInfo.lists.map(list => (
                <div key={list.listID} className="list-block row" id={list.listID}>
                    <Link to={list.listID} className="no-decorate row grow" >
                        <img src={list.listItems.length === 0 ? "/src/assets/default-img.png" : list.listItems[0].itemImg} className="img-small" />
                        <div className="list-block-text grow">
                            <h4>{list.listName}</h4>
                            <p>{!list.listItems ? "0" : list.listItems.length} {list.listItems.length === 1 ? "Item" : "Items"}</p>
                        </div>
                    </Link>
                    <button className="edit-list square-bg" title="edit list"><i className="fa-solid fa-pen"></i></button>
                    <button className="delete-list square-bg" onClick={() => handlePopup(deleteListRef)}><i className="fa-solid fa-trash-can"></i></button>
                </div> 
            ))}
            </div>
            <div className="modal-bg" ref={newListRef}>
                <NewList data={data} handlePopup={handlePopup} userInfo={userInfo} newListRef={newListRef} />
            </div>
            <div className="modal-bg" ref={deleteListRef}>
                <div className="modal confirm-delete" >
                    <h3>Are you sure you want to delete this list?</h3>
                    <h4>This cannot be undone.</h4>
                    <div className="confirm-btns">
                        <button className="confirm" title="confirm delete" onClick={deleteList}>CONFIRM</button>
                        <button className="cancel" title="cancel delete" onClick={() => handlePopup(deleteListRef)}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
}