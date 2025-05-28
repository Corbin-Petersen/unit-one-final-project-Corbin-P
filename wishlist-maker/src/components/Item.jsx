import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Item( props ) {
    
    // set state and variables
    const { itemName, itemCost, itemID, itemImg, itemQuantity, itemURL, closeItem } = props;

    return (
        <div className="modal view-item">
            <button className="close" onClick={closeItem}>&times;</button>
            <div id="item-container" className="col">
                <div id="item-img">
                    <img src={itemImg} className="img-reg" />
                </div>
                <div id="item-details">
                    <h2>{itemName}</h2>
                    <h3>${itemCost}</h3>
                </div>
                <div id="item-btns" className="row">
                    {itemQuantity && 
                        <p className="needed">QUANTITY: <span className="num-needed">{itemQuantity}</span></p>
                    }
                    <button id="edit-item" title="edit item"><FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                    <button id="go-to-item" title="link to item" onClick={() => window.open(itemURL, '_blank')}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></button>
                </div>
            </div>
        </div>
    );
}