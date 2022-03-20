import { connect } from "react-redux";
import { login } from "../../../redux/authReducer";
import { Navigate } from "react-router-dom";
import LoginForm from "./loginForm";

const Login = (props) => {
    
    if(props.isAuth) return <Navigate to='/profiles' />
    return <div className="login">
        <h1> social-network.samuraijs.com login </h1>
        <LoginForm {...props} />
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {login})(Login);