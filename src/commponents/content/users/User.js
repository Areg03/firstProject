import { NavLink } from 'react-router-dom';
import photoNull from '../../../assets/icon.png';

const User = (props) => {
    
    return <div key={props.u.id}>

        <span>
            <div>
                <NavLink to={'/profiles/' + props.u.id}>
                    <img src={props.u.photos.small != null ? props.u.photos.small : photoNull} alt='' />
                </NavLink>
            </div>
            <div>
                {props.u.followed ? <button disabled={props.isToggleFollowing.some(id => id === props.u.id)}

                    onClick={() => {
                        props.toggleFollow(props.u.id);
                    }}> UNFOLLOW</button>
                    : <button disabled={props.isToggleFollowing.some(id => id === props.u.id)}
                        onClick={() => {
                            props.toggleFollow(props.u.id);
                        }}> FOLLOW</button>
                }
            </div>
        </span>
        <span>
            <div>{props.u.name}</div>
            <div>{props.u.status == null ? '!status' : props.u.status}</div>
        </span>
    </div>
}

export default User;