import React, { useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                                     <div>
//                                         <div style={{ color: 'blue', paddingTop: '10px' }}>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div >
//         )
//     }
// }

// function component
const DisplayInfor = (props) => {
    const { listUsers } = props;

    // state for function component
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser ? 'Hide list User' : 'Show list User'}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {
                        listUsers.map((user) => (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div style={{ color: 'blue', paddingTop: '10px' }}>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </>
            }
        </div>
    );
};

export default DisplayInfor;