import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-users-container">
            <div className="title">
                title user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(!showModalCreateUser)}><FaUserPlus /> Add new users</button>
                </div>
                <div className="table-users-container">
                    Table user

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                ></ModalCreateUser>
            </div>
            ManageUser
        </div>
    )
}

export default ManageUser;