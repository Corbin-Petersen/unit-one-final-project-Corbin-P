import { Link, useParams } from "react-router";
import data from '../data/userData.json';

export default function ViewList() {
    
    // pull in params and set variables
    const { userID, listID } = useParams();
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

    // function to display item in modal
    const showItem = () => {
        
    }
    

    return (
        <div className="component col">
            <div className="listview-header">
                <h2>{userList.listName}</h2>
                <p>{userList.listDesc}</p>
            </div>
            <div className="listview col">
                <div className="list-btns row">
                    <button className="new-item-btn">new item</button>
                    <button className="trash-list-btn">delete list</button>
                    <button className="share-list-btn">share list</button>
                </div>
                <div className="list-totals row">
                    <span id="item-count">ITEMS: <b>{userList.listItems.length}</b></span>
                    <span id="cost-total">TOTAL: <b>${listCost()}</b></span>
                </div>
                <div className="list-display row">
                    {userList.listItems.map(item => (
                        <Link to={`${item.itemID}`} className="item-link no-decorate">
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
                        </Link>
                    ))}
                    {hasSpace && 
                        <div className="spacer"></div>
                    }
                </div>
            </div>
        </div>
    );
}