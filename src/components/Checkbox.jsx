import { useTodoStore } from "../stores/todoStore";
import { useParams } from "react-router";

  export default function Checkbox(props){
    const {data, hdlChange} = props
      // console.log("data",data)
    const {userId} = useParams()
    const removeTodo = useTodoStore((state)=>state.removeTodo);

    const hdlRemove = (e) => {

        removeTodo(userId, e)
        fetchTodo(userId)
    }
    return (
        <div className="flex justify-between">
          <div className="flex gap-4">
            <input type="checkbox" checked={data.isdone} onChange={()=>hdlChange() } />
            <p>{data.content}</p>
            {/* <p>peach</p> */}
          </div>
          <div className="flex gap-3">
            <button className="bg-amber-100 ">Edit</button>
            <button onClick={()=> hdlRemove(data.id)}>X</button>
          </div>
        </div>
    )
  }