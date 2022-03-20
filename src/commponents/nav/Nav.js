import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to="" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>Project</NavLink>
            </div>
            <div>
                <NavLink to={"/profiles"} style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>Profiles</NavLink>
            </div>
            <div>
                <NavLink to="/aboutme" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>AboutMe</NavLink>
            </div>
            <div>
                <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>Users</NavLink>
            </div>
        </nav>
    )
}


export default Nav;
