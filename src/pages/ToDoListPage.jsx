import { useEffect } from "react";
import { useTodoStore } from "../stores/todoStore"
import Checkbox from "../components/Checkbox";
import { useParams } from "react-router";

function ToDoListPage() {
  const emoji = String.fromCodePoint(0x1F621)
  const {userId} = useParams()
  const todo = useTodoStore((state)=>state.todo);
  const fetchTodo = useTodoStore((state)=>state.fetchTodo);
  const loading = useTodoStore((state)=>state.loading);
  const error = useTodoStore((state)=>state.error);
  const setTodo = useTodoStore((state)=>state.setTodo);
  const editTodo = useTodoStore((state)=>state.editTodo);
  const removeTodo = useTodoStore((state)=>state.removeTodo);
  // const newData = todo.map(el=> ({...el, selected: false}))
  // const []
  const hdlChange = (e, idx) => {
    // console.log('e', e)
    // console.log('idx', idx)
    const newTodo = [...todo]
    newTodo[idx].isdone = !newTodo[idx].isdone
    console.log('newTodo[idx]', newTodo[idx])
    setTodo(newTodo)
    editTodo(userId,e.id, newTodo[idx].content, newTodo[idx].isdone )  
  }
  const hdlRemove = (e)=>{
    console.log('e',e)
    // console.log('e.id',e.id)
    // console.log('idx', idx)
    // removeTodo(userId, e.id)
    // fetchTodo(userId)
  }

  useEffect(()=>{
    fetchTodo(userId)
  },[])
  
  if(loading) return <p>Loading...</p>
  if(error) return <p className="text-red-600">{error}</p>
  
  // console.log("Content",todo)

  return (
    <div>
      <form className="flex flex-col bg-amber-300 rounded-3xl p-7 m-10 gap-4">
        <div className="flex items-center justify-between text-3xl">
          <h1 className="font-bold">My Todo </h1>
          {emoji}
        </div>
        
        <div className="flex justify-between border-b-1 ">
          <input type="text" name="newTask" placeholder="new task" className="w-full"/>
          <button className="bg-amber-100">Add</button>
        </div>

        {todo?.map((el, idx)=>(<Checkbox key={el.id} data={el} hdlChange={() => hdlChange(el, idx)} hdlRemove={() => hdlRemove()}/>))}

      </form>
    </div>
  )
}

export default ToDoListPage