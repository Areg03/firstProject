import { NavLink } from "react-router-dom";




const Header = (props) => {

  return (
    <header >
      <div className="vernagir"> AREGS PROJECT</div>
      <div className="log">
      {props.isAuth?<div>{props.login}<button onClick={props.logout}>logout</button> </div> 
        : <NavLink to='/authorized'> login </NavLink>}
      </div>
    </header>
  );
}

export default Header;