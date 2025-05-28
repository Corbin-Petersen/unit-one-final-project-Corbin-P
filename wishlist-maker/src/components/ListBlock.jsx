

export default function ListBlock( props ) {
    const { listID, listImg, listName, listLength } = props;

    return (
        <>
            <div key={listID} className="list-block row" id={listID}>
                <Link to={`${listID}`} className="no-decorate row grow">
                    <img src={listImg} className="img-small" />
                    <div className="list-block-text grow">
                        <h4>{listName}</h4>
                        <p>{listLength} Items</p>
                    </div>
                </Link>
                <button className="edit-btn" title="edit list"><FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                <button className="delete-btn"><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
            </div>
        </>
    )
}