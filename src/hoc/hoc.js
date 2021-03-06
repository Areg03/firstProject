import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Navigate to='/authorized' />; 
        return <Component {...props} />;
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
