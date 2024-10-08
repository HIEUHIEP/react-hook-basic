import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    // call when component is mounted ( load done )
    componentDidMount = () => {
        console.log('component is mounted');
        setTimeout(() => {
            document.title = 'New title'
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        // when change props, props...
        console.log('component did update');

        // when change this.state
        // Can so sanh truoc/sau co thay doi thi moi xu ly
        if (prevState.isShowListUser !== this.state.isShowListUser) {
            console.log('component did update show list');
        }
    }

    // call when component lose
    componentWillUnmount() {
        // Clean up any resources or event listeners before the component is unmounted
        console.log('component will unmount');
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUsers } = this.props;
        return (
            <div className='display-infor-container'>
                {/* <img src={logo}></img> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? 'Hide list user' : 'Show list user'}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>
                                        <div style={{ color: 'blue', paddingTop: '10px' }}>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div >
        )
    }
}

export default DisplayInfor;