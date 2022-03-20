import { useEffect} from "react";
import { connect } from "react-redux";
import { toggleFollow, getUsers } from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../../assets/Preloader";
import { getCurrentPage, getFetching, getFollowing, getPageSize, getTotalCount, getUsersSelectorFilter } from "./users-selector";


// class UsersContainer extends React.Component {

//     componentDidMount() {
//         this.props.getUsers(this.props.currentPage, this.props.pageSize);
//     }

//     onPageChanged = (p) => {
//         this.props.getUsers(p, this.props.pageSize);

//     }

//     render = () => {
//         return <>

//             {this.props.isFetching ? <Preloader /> : <Users {...this.props}
//                 onPageChanged={this.onPageChanged}

//             />}

//         </>
//     }
// }

const UsersContainer = (props) => {

    

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    },[])

     let onPageChanged = (p) => {
        props.getUsers(p, props.pageSize);

    }

        return  <Users {...props}
        onPageChanged={onPageChanged}

    />
       
        
    }

    let mapStateToProps = (state) => {
        return {
            users: getUsersSelectorFilter(state),
            totalCount: getTotalCount(state),
            pageSize: getPageSize(state),
            currentPage: getCurrentPage(state),
            isFetching: getFetching(state),
            isToggleFollowing: getFollowing(state),
        }
    }

    let mapDispatchToProps = {
        toggleFollow,
        getUsers,
    }


    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
