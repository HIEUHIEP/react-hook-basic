import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
const ManageUser = (props) => {
    return (
        <div className="manage-users-container">
            <div className="title">
                title user
            </div>
            <div className="user-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table user

                </div>
                <ModalCreateUser></ModalCreateUser>
            </div>
            ManageUser
        </div>
    )
}

export default ManageUser;