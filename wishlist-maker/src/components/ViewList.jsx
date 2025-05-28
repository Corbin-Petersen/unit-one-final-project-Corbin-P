import { NavLink, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewItem from "./NewItem";
import { useRef } from "react";

export default function ViewList( props ) {
    
    // pull in params and set variables
    const { userID, listID } = useParams();
    const { data } = props;
    const newItemModal = useRef(0);
    const userInfo = data.find(user => user.userID == userID);
    const userList = userInfo.lists.find(list => list.listID == listID);
    const hasSpace = userList.listItems.length % 3 !== 0;

    // function to total cost of all items
    const listCost = () => {
        let total = 0;
        userList.listItems.map(item => (
            item.quantity 
            ? total += (item.itemCost * item.quantity)
            : total += item.itemCost
        ));
        return total.toFixed(2);
    }    

        // functions to handle modal fade-in and fade-out
    const openModal = () => {
        newItemModal.current.style.display = "flex";
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            newItemModal.current.style.opacity = "1";
        }, 1);
    }
    const closeModal = () => {
        newItemModal.current.style.opacity = "0";
        document.body.style.overflow = "visible";
        setTimeout(() => {
            newItemModal.current.style.display = "none";
        }, 250);
    }


    return (
        <div className="component col">
            <div className="listview-header">
                <h2>{userList.listName}</h2>
                <p>{userList.listDesc}</p>
            </div>
            <div className="listview col">
                <div className="list-btns row">
                    <button className="new-item-btn" title="add item" onClick={openModal}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                    <button className="trash-list-btn" title="delete list"><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
                    <button className="share-list-btn" title="share list"><FontAwesomeIcon icon="fa-solid fa-share" /></button>
                </div>
                <div className="list-totals row">
                    <span id="item-count">ITEMS: <b>{userList.listItems.length}</b></span>
                    <span id="cost-total">TOTAL: <b>${listCost()}</b></span>
                </div>
                <div className="list-display row">
                    {userList.listItems.map(item => (
                        <NavLink to={`${item.itemID}`} key={`${item.itemID}`} className="item-link no-decorate" viewTransition>
                        <div className="item-block col" id="item.itemID">
                            <div className="item-block-img" style={{backgroundImage: `url(${item.itemImg})`}}>
                                {item.quantity && 
                                    <p className="list-need">QUANTITY: <span className="list-need-num">{item.quantity}</span></p>
                                }
                            </div>
                            <div className="item-block-text">
                                <h4>{item.itemName}</h4>
                                <p>${item.itemCost}</p>
                            </div>
                        </div>
                        </NavLink>
                    ))}
                    {hasSpace && 
                        <div className="spacer"></div>
                    }
                </div>
            </div>
            <div className="modal-bg" ref={newItemModal}>
                <NewItem closeModal={closeModal} />
            </div>
        </div>
    );
}