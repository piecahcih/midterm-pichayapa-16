import { useEffect, useState } from "react";
import { useTodoStore } from "../stores/todoStore"
import Checkbox from "../components/Checkbox";
import { useParams } from "react-router";
import axios from "axios";

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
  const addTodo = useTodoStore((state)=>state.addTodo);

  // const newData = todo.map(el=> ({...el, selected: false}))
  // const []
  
  const[addItem, setAddItem] = useState({
    content:"",
  })
  const hdlChangeInput = (e) =>{
    const {name , value} = e.target
    setAddItem((prv)=>({...prv, [name]:value}))
    // console.log(name, value)
  }
  const hdlChange = (e, idx) => {
    // console.log('e', e)
    // console.log('idx', idx)
    const newTodo = [...todo]
    newTodo[idx].isdone = !newTodo[idx].isdone
    // console.log('newTodo[idx]', newTodo[idx])
    setTodo(newTodo)
    editTodo(userId,e.id, newTodo[idx].content, newTodo[idx].isdone )  
  }


                                // const hdlRemove = (id) => {
                                //   // console.log('remove e',e)
                                //   // e.preventDefault()
                                //   // console.log('e.id',e.id)
                                //   // console.log('idx', idx)
                                //   removeTodo(userId, id)
                                //   fetchTodo(userId)
                                // }
  const hdlAdd = async(e)=>{
    e.preventDefault()
    // console.log('adde',e)
            try {
                const res = await axios.post(`https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}`,addItem)
                    console.log(res.data)
            } catch (error) {
                console.log('error')
                
            }
    // const newAddTodo = [...todo]
    // newTodo[]
    // addTodo(userId)
  }

  useEffect(()=>{
    fetchTodo(userId)
  },[])
  
  if(loading) return <p>Loading...</p>
  if(error) return <p className="text-red-600">{error}</p>
  
  // console.log("Content",todo)

  return (
    <div>
      <div className="flex flex-col bg-amber-300 rounded-3xl p-7 m-10 gap-4">
        <div className="flex items-center justify-between text-3xl">
          <h1 className="font-bold">My Todo </h1>
          {emoji}
        </div>
        
        <form onSubmit={hdlAdd} >
          <div className="flex justify-between border-b-1 ">
            <input type="text" name="content" placeholder="new task" className="w-full"
            onChange={hdlChangeInput}  value={addItem.content}/>
            <button className="bg-amber-100"
            >Add</button>
          </div>
        </form>

        {todo?.map((el, idx)=>(<Checkbox key={el.id} data={el} hdlChange={() => hdlChange(el, idx)} />))}
        {/* {todo?.map((el, idx)=>(<Checkbox key={el.id} data={el} hdlChange={() => hdlChange(el, idx)} hdlRemove={()=>hdlRemove(el.id)}/>))} */}

      </div>

    </div>
  )
}

export default ToDoListPage