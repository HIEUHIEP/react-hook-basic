import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class Mycomponent extends React.Component {


    // JSX
    render() {
        const myInfor = ['a', 'b', 'c']
        const myAge = 30;
        return (
            <div>
                <UserInfor />
                <DisplayInfor name={"hieppu"} age={30} myInfor={myInfor} />
            </div>
        );
    }
}

export default Mycomponent;