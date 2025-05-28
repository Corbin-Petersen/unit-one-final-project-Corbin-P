import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ViewItem( props ) {
    
    // set state and variables
    const { userID, listID, itemID } = useParams();
    const { data } = props;
    const userInfo = data.find(user => user.userID == userID);
    const userList = userInfo.lists.find(list => list.listID == listID);
    const userItem = userList.listItems.find(item => item.itemID == itemID);

    return (
        <div className="component col">
            <div id="item-container" className="col">
                <div id="item-img">
                    <img src={userItem.itemImg} className="img-reg" />
                </div>
                <div id="item-details">
                    <h2>{userItem.itemName}</h2>
                    <h3>${userItem.itemCost}</h3>
                </div>
                <div id="item-btns" className="row">
                    {userItem.quantity &&
                        <p className="needed"># NEEDED: <span className="num-needed">{userItem.quantity}</span></p>
                    }
                    <button id="edit-item" title="edit item"><FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                    <button id="go-to-item" title="link to item" onClick={() => window.open(userItem.itemURL, '_blank')}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></button>
                </div>
            </div>
        </div>
    );
}