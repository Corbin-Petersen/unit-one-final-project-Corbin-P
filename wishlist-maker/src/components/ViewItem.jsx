import { Link, useParams } from "react-router";

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
                    <p className="needed hide"># NEEDED: <span className="num-needed">1</span></p>
                    <button id="edit-item" >edit</button>
                    <button id="go-to-item" >link</button>
                </div>
            </div>
        </div>
    );
}