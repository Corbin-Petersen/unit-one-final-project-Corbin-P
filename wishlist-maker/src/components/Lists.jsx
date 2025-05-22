import React from "react";
import { Link, useParams } from "react-router";
import { userList } from '../shared/userData';

export default function Lists() {
    const { user } = useParams();

    return (
        <div className="component col">
            <div id="list-welcome">
                <h2>Hello USER!</h2>
            </div>
            <div id="lists-list" className="col">
                <div id="lists-header" className="row">
                    <h3>Your Lists</h3>
                    <button id="new-list-btn">new list</button>
                </div>
                <div className="list-block row" id="list-1">
                    <img src="/src/assets/default-img.png" className="img-small" />
                    <div className="list-block-text grow">
                        <h4>List Name</h4>
                        <p>## Items</p>
                    </div>
                    <button className="edit-btn">edit</button>
                    <button className="link-btn">view</button>
                </div>
                <div className="list-block row" id="list-2">
                    <img src="/src/assets/default-img.png" className="img-small" />
                    <div className="list-block-text grow">
                        <h4>List Name</h4>
                        <p>## Items</p>
                    </div>
                    <button className="edit-btn">edit</button>
                    <button className="link-btn">view</button>
                </div>
            </div>
        </div>
    );
}