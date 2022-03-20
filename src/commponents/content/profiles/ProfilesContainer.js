import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profiles from "./Profiles";
import { setUserProfile, getStatus, updateStatus, updateAvatar} from "../../../redux/profileReducer";
import { withAuthRedirect } from "../../../hoc/hoc";
import { compose } from "redux";
import { useMatch } from "react-router-dom";

const ProfilesContainer = (props) => {

    let match = useMatch('/profiles/:userId/');
    let userId = match ? match.params.userId : props.authorizedUserId;

    
    

    useEffect( () => {
        props.getStatus(userId);
        props.setUserProfile(userId);
        
    }, [userId])



    return <Profiles {...props} match={!match} />
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
    avatar: state.profilePage.avatar,
})

let mapDispatchToProps = {
    setUserProfile, getStatus, updateStatus, updateAvatar,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(ProfilesContainer);



