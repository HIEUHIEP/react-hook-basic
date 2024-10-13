import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../service/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, fetchListUsersWithPaginate, setCurrentPage } = props; // props là 1 object nên dùng {}

    const handleClose = () => {
        setShow(false);
    };

    const handleSubmitDeleteUser = async (event) => {
        //call API
        let data = await deleteUser(dataDelete.id);
        if (data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetchListUsers();
            setCurrentPage(1);
            await fetchListUsersWithPaginate(1);
        }
        if (data.EC !== 0) {
            toast.error(data.EM);
        }

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete user: <b>{dataDelete && dataDelete.email ? dataDelete.email : ''}</b> ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;