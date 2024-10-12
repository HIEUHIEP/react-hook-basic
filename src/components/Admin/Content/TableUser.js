import { useEffect, useState } from "react";
import { getAllUsers } from '../../../service/apiService';
const TableUser = (props) => {
    const { listUsers } = props;


    return (
        <>
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0
                        && listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <th>{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>

                                    <td>
                                        <button className='btn btn-secondary'>View</button>
                                        <button className='btn btn-warning mx-3'>Update</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;