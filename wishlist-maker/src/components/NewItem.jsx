import React from "react";
import { Link, useParams } from "react-router";
import { userList } from '../shared/userData';

export default function NewItem( props ) {
    const { closeModal } = props;

    return (
        <div className="modal make-new">
            <button className="close" onClick={closeModal}>&times;</button>
            <div id="new-item-header">
                <h2>Create New Item</h2>
            </div>
            <form name="new-item" id="new-item" className="col">
                <label>ITEM NAME
                    <input type="text" id="item-name" name="itemName" autoFocus />
                </label>
                <label>URL
                    <input type="url" id="item-URL" name="itemURL" />
                </label>
                <div id="cost-img-input" className="row">
                    <label className="grow">COST
                        <input type="number" step="0.01" id="item-cost" name="itemCost" />
                    </label>
                    <label>IMAGE
                        <input type="file" id="upload-image" name="newImg" />
                    </label>
                </div>
                <div id="new-image">
                    <img src="/src/assets/default-img.png" className="img-reg" />
                </div>
                <button className="submit-btn" onClick="">SUBMIT</button>
            </form>
        </div>
    );
}