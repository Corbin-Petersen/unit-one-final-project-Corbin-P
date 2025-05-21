import React from "react";
import { Link, useParams } from "react-router";

export default function Lists() {
    const { user } = useParams();

    return (
        <div className="component">
            <div id="welcome-header">
                <h2>Hello USER!</h2>
            </div>
            <div id="lists-list">
                <div id="lists-header">
                    <h3>Your Lists</h3>
                    <button id="new-list-btn">new list</button>
                </div>
                <div className="list-block" id="list-1">
                    <img src="/src/assets/default-img.png" className="list-img" />
                    <div className="list-block-text">
                        <h4>List Name</h4>
                        <p>## Items</p>
                    </div>
                    <button className="edit-btn">edit</button>
                    <button className="link-btn">view</button>
                </div>
                <div className="list-block" id="list-2">
                    <img src="/src/assets/default-img.png" className="list-img" />
                    <div className="list-block-text">
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