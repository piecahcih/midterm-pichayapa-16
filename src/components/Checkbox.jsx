import { useTodoStore } from "../stores/todoStore";

  export default function Checkbox(props){
    const {data, hdlChange, hdlRemove} = props

    // const removeTodo = useTodoStore((state)=>state.removeTodo);
    // console.log("data",data)
    return (
        <div className="flex justify-between">
          <div className="flex gap-4">
            <input type="checkbox" checked={data.isdone} onChange={()=>hdlChange() } />
            <p>{data.content}</p>
            {/* <p>peach</p> */}
          </div>
          <div className="flex gap-3">
            <button className="bg-amber-100 ">Edit</button>
            <button onClick={()=> hdlRemove(data)}>X</button>
          </div>
        </div>
    )
  }