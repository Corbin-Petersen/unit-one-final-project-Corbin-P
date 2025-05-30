import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import NewList from "./NewList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Lists( props ) {
    // pull in params and set variables
    const { userID, listID } = useParams();
    const { data } = props;
    const newListRef = useRef(0);
    const userInfo = data.find(user => user.userID == userID);
    const [ isVisible, setIsVisible ] = useState(false);

    // functions to handle modals
    const handleNewList = () => {
        !isVisible ? (
            document.body.style.overflow = "hidden",
            newListRef.current.style.display = "flex",
            setTimeout(() => {
                newListRef.current.style.opacity = "1",
                newListRef.current.lastElementChild.style.transform = "translateY(0px)"
            }, 1)
        ) : (
            newListRef.current.style.opacity = "0",
            newListRef.current.lastElementChild.style.transform = "translateY(-25px)",
            document.body.style.overflow = "visible",
            setTimeout(() => {
                newListRef.current.style.display = "none";
            }, 250)
        );
        setIsVisible(!isVisible);
    }


    return (
        <div className="component col">
            <div id="list-welcome">
                <h2>Hello {userInfo.firstName}!</h2>
            </div>
            <div id="lists-list" className="col">
                <div id="lists-header" className="row">
                    <h3>YOUR LISTS</h3>
                    <button id="new-list-btn" className="square" title="new list" onClick={handleNewList}><i className="fa-solid fa-plus"></i></button>
                </div>
                {userInfo.lists.map(list => (
                    <div key={list.listID} className="list-block row" id={list.listID}>
                        <Link to={list.listID} className="no-decorate row grow" >
                            <img src={list.listItems[0].itemImg} className="img-small" />
                            <div className="list-block-text grow">
                                <h4>{list.listName}</h4>
                                <p>{list.listItems.length} Items</p>
                            </div>
                        </Link>
                        <button className="edit-list square-bg" title="edit list"><i className="fa-solid fa-pen"></i></button>
                        <button className="delete-list square-bg"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                ))}
            </div>
            <div className="modal-bg" ref={newListRef}>
                <NewList data={data} handleNewList={handleNewList} userInfo={userInfo} />
            </div>
        </div>
    );
}