


export default function NewList() {


    return (
        <div className="component col">
            <div id="new-list-header">
                <h2>Create New List</h2>
            </div>
            <form name="new-list" id="new-list" className="col">
                <label>LIST NAME
                    <input type="text" id="list-name" name="listname" autoFocus/>
                </label>
                <label>DESCRIPTION
                    <textarea id="list-info" name="listinfo" rows="5"/>
                </label>
                <button onClick="">SUBMIT</button>
            </form>
        </div>
    );
}