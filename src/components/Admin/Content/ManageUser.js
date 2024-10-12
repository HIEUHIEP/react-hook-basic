import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaUserPlus } from "react-icons/fa";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../service/apiService';

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }


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
                    <TableUser listUsers={listUsers} />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                ></ModalCreateUser>
            </div>
            ManageUser
        </div>
    )
}

export default ManageUser;