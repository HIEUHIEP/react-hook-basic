import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

// function component
// useState is a Hook
const DisplayInfor = (props) => {
    const { listUsers } = props;

    // state for function component
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => {
            if (listUsers.length === 0)
                console.log('No users to display');
        }, [listUsers] // tracking listUsers (Hook)
    );

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