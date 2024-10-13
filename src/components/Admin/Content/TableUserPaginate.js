import { useEffect, useState } from "react";
import { getAllUsers } from '../../../service/apiService';
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount, fetchListUsersWithPaginate, currentPage, setCurrentPage } = props;
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected + 1);
        fetchListUsersWithPaginate(+event.selected + 1);
    };

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
                                        <button className='btn btn-secondary' onClick={() => props.handleClickBtnView(item)}>View</button>
                                        <button className='btn btn-warning mx-3' onClick={() => props.handleClickBtnUpdate(item)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => props.handleClickBtnDelete(item)}>Delete</button>
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
            <div className="user-paginate">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={+currentPage - 1} // cưởng chế layout page selected 
                />
            </div>

        </>
    )
}

export default TableUserPaginate;