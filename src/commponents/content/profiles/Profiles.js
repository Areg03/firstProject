import Preloader from "../../../assets/Preloader";
import ProfilesStatus from "./ProfilesStatus";
import photoNull from '../../../assets/icon.png';
import { memo, useEffect, useState } from "react";





const Profiles = memo((props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let onAvatarChange = (e) => {
        if (e.target.files.length) {
            props.updateAvatar(e.target.files[0])
        }
    }


    return <div className="profiles">
        <img src={props.profile.photos.large != null ? props.profile.photos.large : photoNull} />
        <div className="avatar">
            {props.match && <input type={'file'} onChange={onAvatarChange} />}
        </div>

        <div>Name: {props.profile.fullName}</div>
        <ProfilesStatus  {...props} />
    </div>
})

export default Profiles;