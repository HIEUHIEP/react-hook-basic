import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "hiep1", age: "10" },
            { id: 2, name: "hiep2", age: "18" },
            { id: 3, name: "hiep3", age: "30" },
        ]
    }
    handleAddNewUser = (userObj) => {
        let listUserClone = [...this.state.listUsers];
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    // JSX
    render() {
        // Don't repeat yourself
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default Mycomponent;