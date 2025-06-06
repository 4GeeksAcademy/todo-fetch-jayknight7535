const TodoItem = ({list, showDelete= false, onDelete}) => {
   
    return (
        <div className="flex-d">
            <div className="d-flex justify-content-between">
                <div className="mb-3 d-flex">
                  <div>{list?.todo ? list.todo: "nothing to do"}</div>  
                  <div>{list?.importance ? list.importance: ""}</div>
                  <div>
                    {showDelete ? (
                   <button type="button" className="btn-close" aria-label="Close" onClick={onDelete}></button>) : ("")}
                   </div>
                </div> 
            </div>
        </div>
    );
}
//
export default TodoItem