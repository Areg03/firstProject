import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData,  logout } from "../../redux/authReducer"

// class HeaderContainer extends React.Component {
//     componentDidMount() {
//         this.props.setAuthUserData();
//     }

//     render = () => {
//         return <Header {...this.props} />
//     }
// }
const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData()
    })
    return <Header {...props} />
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let mapDispatchToProps = {
    getAuthUserData, logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);