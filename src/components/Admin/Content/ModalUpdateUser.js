import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiPlusCircle } from "react-icons/fi";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../service/apiService.js';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate, resetDataUpdate, fetchListUsersWithPaginate, currentPage } = props; // props là 1 object nên dùng {}


    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleClose = () => {
        setShow(false);
        setId("");
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        resetDataUpdate();
    };

    useEffect(() => {
        // setEmail(dataUpdate.email);
        if (!_.isEmpty(dataUpdate)) {
            setId(dataUpdate.id);
            setEmail(dataUpdate.email);
            setPassword(dataUpdate.password);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage(dataUpdate.image);
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0]);
        }

    }

    const handleSubmitUpdateUser = async (event) => {
        //validate
        //call API
        let data = await putUpdateUser(id, username, role, image);
        if (data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetchListUsers();
            // setCurrentPage(1);
            await fetchListUsersWithPaginate(currentPage);
        }
        if (data.EC !== 0) {
            toast.error(data.EM);
        }

    }


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size="xl" backdrop='static' className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='labelUpload'><FiPlusCircle></FiPlusCircle> Upload file image</label>
                            <input type="file" hidden id="labelUpload" onChange={(event) => handleUploadImage(event)}></input>
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview image</span>}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;