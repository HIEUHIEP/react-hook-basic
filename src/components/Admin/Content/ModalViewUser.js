import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiPlusCircle } from "react-icons/fi";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../service/apiService.js';
import _ from 'lodash';

const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props; // props là 1 object nên dùng {}

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop='static' className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>View user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={dataView && dataView.email ? dataView.email : ""}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={dataView && dataView.password ? dataView.password : ""}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataView && dataView.username ? dataView.username : ""}
                                disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={dataView && dataView.role ? dataView.role : ""} disabled>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            Image
                        </div>
                        <div className="col-md-12 img-preview">
                            {dataView && dataView.image ?
                                <img src={`data:image/jpeg;base64,${dataView.image}`} />
                                :
                                <span>Preview image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;