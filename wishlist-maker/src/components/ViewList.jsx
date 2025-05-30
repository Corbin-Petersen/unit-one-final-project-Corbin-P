import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router";
import NewItem from "./NewItem";
import Item from "./Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

export default function ViewList( props ) {
    // pull in params and set variables
    const { userID, listID } = useParams();
    const { data } = props;
    const newItemModal = useRef(0);
    const [ isVisible, setIsVisible ] = useState(false);
    const [ lastClicked, setLastClicked ] = useState(null);
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

    // functions to handle modals
    const handleNewItem = () => {
        !isVisible ? (
            document.body.style.overflow = "hidden",
            newItemModal.current.style.display = "flex",
            setTimeout(() => {
                newItemModal.current.style.opacity = "1";
            }, 1)
        ) : (
            newItemModal.current.style.opacity = "0",
            document.body.style.overflow = "visible",
            setTimeout(() => {
                newItemModal.current.style.display = "none";
            }, 250)
        );
        setIsVisible(!isVisible);
    }
    const handleItemView = (e) => {
        let clicked = e.currentTarget;
        let item = e.currentTarget.lastElementChild;
        !isVisible ? (
            document.body.style.overflow = "hidden",
            clicked.style.pointerEvents = "none",
            item.style.display = "flex",
            setTimeout(() => {
                item.style.opacity = "1"
            }, 1),
            setLastClicked(item)
        ) : (
            document.body.style.overflow = "visible",
            clicked.style.pointerEvents = "auto",
            lastClicked.style.opacity = "0",
            setTimeout(() => {
                lastClicked.style.display = "none"
            }, 1),
            setLastClicked(null)
        );
        setIsVisible(!isVisible);
    }


    return (
        <div className="component col">
            <div className="listview-header">
                <h2>{userList.listName}</h2>
                <p>{userList.listDesc}</p>
            </div>
            <div className="listview col">
                <div className="list-btns row">
                    <button className="new-item-btn square" style={{pointerEvents: isVisible ? "none" : "auto"}} title="add item" onClick={handleNewItem}><i className="fa-solid fa-plus"></i></button>
                    <button className="share-list-btn square" style={{pointerEvents: isVisible ? "none" : "auto"}} title="share list"><i className="fa-solid fa-share"></i></button>
                </div>
                <div className="list-totals row">
                    <span id="item-count">ITEMS: <b>{userList.listItems.length}</b></span>
                    <span id="cost-total">TOTAL: <b>${listCost()}</b></span>
                </div>
                <div className="list-display row">
                    {userList.listItems.map(item => (
                        <div key={`${item.itemID}`} id="item.itemID" className="item col" style={{pointerEvents: isVisible ? "none" : "auto"}} onClick={handleItemView}>
                            <div className="item-block-img" style={{backgroundImage: `url(${item.itemImg})`}}>
                                {item.quantity && 
                                    <p className="list-need">QUANTITY: <span className="list-need-num">{item.quantity}</span></p>
                                }
                            </div>
                            <div className="item-block-text">
                                <h4>{item.itemName}</h4>
                                <p>${item.itemCost}</p>
                            </div>
                            <div id={`${item.itemID}-view`} className="modal-bg">
                                <Item itemName={item.itemName} itemCost={item.itemCost} itemID={item.itemID} itemImg={item.itemImg} itemQuantity={item.quantity} itemURL={item.itemURL} closeItem={handleItemView} />
                            </div>
                        </div>
                    ))}
                    {hasSpace && 
                        <div className="spacer"></div>
                    }
                </div>
            </div>
            <div className="modal-bg" ref={newItemModal}>
                <NewItem data={data} userInfo={userInfo} userList={userList} closeModal={handleNewItem} />
            </div>
        </div>
    );
}