import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: '',
        age: '',
        address: ''

    };

    handleOnMouseOver(event) {
        // console.log(event)
    }

    handleOnChangeName = (event) => {
        // console.log(event.target.value);
        // console.log(event, event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        // console.log(event.target.value);
        // console.log(event, event.target.value);
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault(); // tranh reload lai page sau khi submit.
        // alert('me');
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and I am {this.state.age}

                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <lable>Your name</lable>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => { this.handleOnChangeName(event) }}></input>

                    <lable>Your age</lable>
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => { this.handleOnChangeAge(event) }}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;