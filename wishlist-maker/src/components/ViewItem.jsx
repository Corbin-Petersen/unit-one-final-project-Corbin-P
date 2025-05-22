import React from "react";
import { Link, useParams } from "react-router";
import { userList } from '../shared/userData';

export default function ViewItem() {


    return (
        <div className="component col">
            <div id="item-img">
                <img src="/src/assets/default-img.png" className="img-reg" />
            </div>
            <div id="item-details">
                <h2>Item Name</h2>
                <h3>$00.00</h3>
            </div>
            <div id="item-btns" className="row">
                <p className="needed hide"># NEEDED: <span className="num-needed">1</span></p>
                <button id="edit-item" >edit</button>
                <button id="go-to-item" >link</button>
            </div>
        </div>
    );
}