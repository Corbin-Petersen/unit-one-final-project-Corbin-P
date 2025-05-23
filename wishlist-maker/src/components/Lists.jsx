import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import data from '../data/userData.json';

export default function Lists() {
    const { userID } = useParams();
    const userInfo = data.find(user => user.userID == userID);

    console.log(Array.isArray(userInfo.lists));

    return (
        <div className="component col">
            <div id="list-welcome">
                <h2>Hello {userInfo.firstName}!</h2>
            </div>
            <div id="lists-list" className="col">
                <div id="lists-header" className="row">
                    <h3>Your Lists</h3>
                    <button id="new-list-btn">new list</button>
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
                        <button className="edit-btn">edit</button>
                        {/* <button className="link-btn">view</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}