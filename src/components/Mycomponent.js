import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class Mycomponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "hiep1", age: "10" },
//             { id: 2, name: "hiep2", age: "18" },
//             { id: 3, name: "hiep3", age: "30" },
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         // let listUserClone = [...this.state.listUsers];
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }
//     // JSX
//     render() {
//         // Don't repeat yourself
//         return (
//             <>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         );
//     }
// }

const Mycomponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "hiep1", age: "10" },
        { id: 2, name: "hiep2", age: "18" },
        { id: 3, name: "hiep3", age: "30" },
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone)
    }
    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
}


export default Mycomponent;