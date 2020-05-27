import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import LoginForm from './LoginForm';

class Login extends React.Component {
    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.setState({ isLoading: true })
        axiosWithAuth()
            .post('/auth/login', this.state.credentials)
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.password)
                this.props.history.push('/main-feed')
                this.setState({isLoading: false})
            })
            .catch(err => console.log(err));
    }

    render() {
        const {isLoading} = this.state
        return (
            <main>
                {isLoading ? <h1>this is a placeholder for a loading spinner component</h1> : 
                <div>
                    <LoginForm
                        values={this.state.credentials}
                        onChange={this.handleChange}
                        onSubmit={this.login}
                    />
                </div>
                }
            </main>
        )
    }
}

export default Login