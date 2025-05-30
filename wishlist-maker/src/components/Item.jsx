import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

export default function Item( props ) {
    
    // set state and variables
    const { itemName, itemCost, itemImg, itemQuantity, itemURL, closeItem } = props;

    return (
        <div id="view-item" className="modal col">
            <button className="close square" onClick={closeItem}><i className="fa-solid fa-xmark"></i></button>
            <div id="item-container" className="col">
                <div id="item-img">
                    <img src={itemImg} className="img-reg" />
                </div>
                <div id="item-details">
                    <h2>{itemName}</h2>
                    <h3 className="price">${itemCost}</h3><br/>
                <div id="item-btns" className="row">
                    {itemQuantity && 
                        <p className="needed">QUANTITY: <span className="num-needed">{itemQuantity}</span></p>
                    }
                    <button id="edit-item-btn" className="edit-item square" title="edit item"><i className="fa-solid fa-pen"></i></button>
                    <button id="delete-item-btn" className="delete-item square" title="delete item"><i className="fa-solid fa-trash-can"></i></button>
                    <button id="go-to-item" className="square" title="link to item" onClick={() => window.open(itemURL, '_blank')}><i className="fa-solid fa-up-right-from-square"></i></button>
                </div>
                </div>
            </div>
        </div>
    );
}