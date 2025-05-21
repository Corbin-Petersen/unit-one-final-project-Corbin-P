import React from "react";
import { Link, useParams } from "react-router";

export default function ViewList() {
    const { user } = useParams();

    return (
        <div className="component col">
            <div className="listview-header">
                <h2>List Name</h2>
                <p>List description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut semper eros, at lacinia odio. Cras ac massa augue. Pellentesque nec odio id nibh vehicula sollicitudin sed vitae risus. Maecenas tincidunt enim et lorem fermentum consequat.</p>
            </div>
            <div className="list-totals row">
                <span id="item-count">ITEMS: <b>##</b></span>
                <span id="cost-total">TOTAL: <b>$00.00</b></span>
            </div>
            <div className="listview col">
                <div className="list-btns row">
                    <button className="new-item-btn">new item</button>
                    <button className="trash-list-btn">delete list</button>
                    <button className="share-list-btn">share list</button>
                </div>
                <div className="list-display row">
                    <div className="item-block" id="item-1">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-2">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-3">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-4">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-5">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-6">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                    <div className="item-block" id="item-7">
                        <img src="/src/assets/default-img.png" className="img-med" />
                        <div className="item-block-text">
                            <h4>Item Name</h4>
                            <p>$00.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}