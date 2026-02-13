import { NavLink } from "react-router"

function RegisterPage() {
  const inputStyle = "shadow bg-amber-200 p-2 w-full rounded-md"
  return (
    <div className="flex justify-center m-10">
        
      <form className="flex flex-col bg-amber-300 rounded-3xl px-8 py-12 m-10 gap-4 w-[450px]">
        <h1 className="font-bold text-3xl">Register</h1>
        <input type="text" name="username" placeholder="username" className={inputStyle}/>
        <input type="password" name="password" placeholder="password" className={inputStyle}/>
        <input type="password" name="confirmpassword" placeholder="confirm password" className={inputStyle}/>
         
        <button className="shadow bg-amber-600 font-bold p-2 rounded-md">SIGN UP</button>
        <p className="text-gray-800 flex gap-4 justify-center">Already have an account?
          <NavLink className="text-blue-500" to="/">Log In</NavLink>
        </p>
      </form>
 
    </div>
  )
}

export default RegisterPage