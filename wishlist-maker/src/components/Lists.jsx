import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Lists( props ) {
    // pull in params and set variables
    const { userID } = useParams();
    const { data } = props;
    const userInfo = data.find(user => user.userID == userID);


    return (
        <div className="component col">
            <div id="list-welcome">
                <h2>Hello {userInfo.firstName}!</h2>
            </div>
            <div id="lists-list" className="col">
                <div id="lists-header" className="row">
                    <h3>YOUR LISTS</h3>
                    <button id="new-list-btn" className="square" title="new list"><i className="fa-solid fa-plus"></i></button>
                </div>
                {userInfo.lists.map(list => (
                    <div key={list.listID} className="list-block row" id={list.listID}>
                        <Link to={`${list.listID}`} className="no-decorate row grow">
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
        </div>
    );
}