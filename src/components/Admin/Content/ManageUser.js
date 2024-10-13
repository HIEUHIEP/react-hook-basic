import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaUserPlus } from "react-icons/fa";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from '../../../service/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 3;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState();
    const [dataView, setDataView] = useState();
    const [dataDelete, setDataDelete] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }
    const resetDataUpdate = () => {
        setDataUpdate();
    }

    const resetDataView = () => {
        setDataView();
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    setCurrentPage={setCurrentPage}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    // fetchListUsers={fetchListUsers}
                    resetDataUpdate={resetDataUpdate}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}

                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetDataView={resetDataView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            ManageUser
        </div>
    )
}

export default ManageUser;