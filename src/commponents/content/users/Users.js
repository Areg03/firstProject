import Preloader from '../../../assets/Preloader';
import User from './User';
import UsersPaginator from './usersPaginator';

const Users = (props) => {

    let a = props.totalCount;

    if (a > 63) {
        a = 63;
    }
    let pagesCount = Math.ceil(a*4 / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className="users">
            {props.isFetching && <Preloader />}
            <div className="main">
                <UsersPaginator {...props} />
                {props.users.map(u => <User {...props} u={u} />)}
            </div>
        </div>
    )
}

export default Users;