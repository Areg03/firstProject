import { useEffect, useState } from "react";

// class ProfilesStatus extends React.Component {

//     status = {
//         editMode: false,
//         status: this.props.status
//     }


//     activatedEditMode = () => {
//         this.setStatus({ editMode: true });

//     }
//     unActivatedEditMode = () => {
//         this.setStatus({ editMode: false });
//         this.props.updateStatus(this.status.status)
//     }

//     onStatusChange = (p) => {
//         this.setStatus({
//             status: p.currentTarget.value
//         });
//     }

//     componentDidUpdate(prevProps, prevstatus) {
//         if (prevProps.status !== this.props.status) {
//             this.setStatus({
//                 status: this.props.status
//             });
//         }
//     }

//     render() {

//         return (
//             <div>
//                 {!this.status.editMode ?
//                     <div>
//                         <span onDoubleClick={this.activatedEditMode}>{this.status.status}</span>
//                     </div>
//                     :
//                     <div>
//                         <input onChange={this.onStatusChange}
//                             autoFocus={true} onBlur={this.unActivatedEditMode} value={this.status.status} />
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const ProfilesStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activatedEditMode = () => {
        setEditMode(true);

    }

    let unActivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    },[props.profile.userId]) 

    return (
        <div>
            {!editMode?
                <div>
                    <span 
                        onDoubleClick={activatedEditMode}>Status: {status}</span>
                </div>
                : 
                <div>
                <input onChange={onStatusChange}
                 autoFocus={true} onBlur={unActivatedEditMode} value={status} />
            </div>
            }


        </div>
    )
}

export default ProfilesStatus;