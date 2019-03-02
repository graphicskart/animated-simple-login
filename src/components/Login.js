import React, { Component } from 'react';
import {
    Col,
    Row,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap';

const initialUser = {
    email: "",
    password: ""
};

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {...initialUser}
        }
    }

    onChange = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            user: {...initialUser}
        });
    }

    render() {
        return(
            <Col xs={12} sm={4} className="form-container">
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Col xs = {12}>
                            <h2 className="text-center" >Login</h2>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <FormControl 
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.user.password}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button type="submit" variant="outline-success" block>Login</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </form>
            </Col>
        )
    }
}