import { useState } from "react"
import { loginValidators } from "../validators/loginValidators"
import axios from "axios"
import { useNavigate } from "react-router"

function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    username:"",
    password:""
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const hdlChange = (e)=>{
    const {name , value} = e.target
    setFormLogin((prv)=>({...prv, [name]:value}))
    // console.log(name,value)
  }

  const hdlSubmit = async (e)=>{
    e.preventDefault();
    setError({});
    const result = loginValidators.safeParse(formLogin)
    if(!result.success){
      const{fieldErrors} = result.error.flatten()
      setError(fieldErrors)
      return;
    }

    try {
      const res = await axios.post("https://drive-accessible-pictures-send.trycloudflare.com/auth/login", formLogin)
      console.log(res.data)
      const userId = res.data.user.userId
      navigate(`/todolist/${userId}`)
    } catch (error) {
      console.log('ERROR')

    }
  }

  console.log("error",error)
  console.log("formlogin",formLogin)

  const inputStyle = "border p-2 w-full"
  return (
    <div className="">
      <form onSubmit={hdlSubmit} className="flex flex-col bg-amber-300 rounded-3xl p-5 m-10 gap-4">
        <h1 className="font-bold text-2xl">Welcome</h1>
        <div>
          <input type="text" name="username" placeholder="username" className={inputStyle}
          onChange={hdlChange}/>
          {error?.username && <p className="text-red-600 text-[12px]">{error?.username[0]}</p>}
        </div>
        <div>
          <input type="password" name="password" placeholder="password" className={inputStyle}
          onChange={hdlChange}/>
          {error?.password && <p className="text-red-600 text-[12px]">{error?.password[0]}</p>}
        </div>
        <button className="bg-amber-600 font-bold p-2">LOG IN</button>
      </form>
    </div>
  )
}

export default LoginPage