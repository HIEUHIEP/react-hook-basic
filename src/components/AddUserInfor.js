import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: ''

//     };

//     handleOnMouseOver(event) {
//         // console.log(event)
//     }

//     handleOnChangeName = (event) => {
//         // console.log(event.target.value);
//         // console.log(event, event.target.value);
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         // console.log(event.target.value);
//         // console.log(event, event.target.value);
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault(); // tranh reload lai page sau khi submit.
//         // alert('me');
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and I am {this.state.age}

//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <lable>Your name</lable>
//                     <input
//                         value={this.state.name}
//                         type='text'
//                         onChange={(event) => { this.handleOnChangeName(event) }}></input>

//                     <lable>Your age</lable>
//                     <input
//                         value={this.state.age}
//                         type='text'
//                         onChange={(event) => { this.handleOnChangeAge(event) }}></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {

    const [name, setName] = useState('1');

    const [age, setAge] = useState('2');

    const [address, setAddress] = useState('Quang Nam');

    const handleOnMouseOver = (event) => {
        // console.log(event)
    }

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault(); // tranh reload lai page sau khi submit.
        // alert('me');
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
        setName('');
        setAge('');
    }

    return (
        <div>
            my name is {name} and I am {age}

            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <lable>Your name</lable>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => { handleOnChangeName(event) }}></input>

                <lable>Your age</lable>
                <input
                    value={age}
                    type='text'
                    onChange={(event) => { handleOnChangeAge(event) }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;