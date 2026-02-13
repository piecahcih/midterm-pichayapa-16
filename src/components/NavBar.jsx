import { NavLink } from "react-router"

function NavBar() {
  const navStyle = "text-black"
  return (
    <div className="bg-amber-300 flex justify-center gap-15">
      <NavLink className={navStyle} to="/">Login</NavLink>
      <NavLink className={navStyle} to="/register">Register</NavLink>
      <NavLink className={navStyle} to="/login">Todolist</NavLink>
    </div>
  )
}

export default NavBar