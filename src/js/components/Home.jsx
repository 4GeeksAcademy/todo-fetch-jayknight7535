import React, { useEffect, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoItem from "./todoitem"; TodoItem

//create your first component
const Home = () => {
	const [todo,settodo] = useState("");
	const [importance, setimportance] = useState("");
	const [lists, setlists] = useState([]);
	const deletelist = async (todo_id) =>{
		const resp = fetch("https://playground.4geeks.com/todo/todos/${todo_id}", {
			method: "DELETE",
			headers: {"Content-Type" : "aplication/json"}
			}
		)
	}
	const loadData = async () => {
		const resp = await fetch("https://playground.4geeks.com/todo/users/jayknight7535");
		const data = await resp.json();
		setlists(data.lists)
	}
	
	useState(() => {
		loadData()
	})


	
	return (
	  <div className="card">
 		<div className="card-body">
    	  <form  onSubmit= { async (ev) => {
			if ([todo, importance].some((x)=>x)){
				const resp = await fetch("https://playground.4geeks.com/todo/todos/jayknight7535)", {
					method : "Post",
					body : JSON.stringify({
						todo,
						importance
					})
				})
			const data = await resp.json;
		    ev.preventDefault();
			setlists([...lists, {todo, importance}]);
			settodo("");
			setimportance("");
		  }}}>
			<input 
			 className ="form-control" 
			 type="text" 
			 placeholder="What do I need to do?" 
			 aria-label="todo" 
			 value={todo} 
			 onChange={(ev) => settodo(ev.target.value) }/>
			<input 
			 className="form-control"  
			 type="text" 
			 placeholder="how important is it?" 
			 aria-label="importance" 
			 value={importance} 
			 onChange={(ev) => setimportance(ev.target.value) }/>
			<div className="mb-2">
			   <button className= "btn btn-primary" type="submit">Add task</button>
			</div>
		  </form>
		  <div>
			{lists.map((list, idx) => (
                <TodoItem list= {list} showDelete onDelete={() => deletelist(list_id)} key={idx}/>
            ))}
		  </div>
        </div>
		 <div class="card-footer text-body-secondary">
			you have {lists.length} tasks to do
			</div>
      </div>
	);
};


export default Home;