import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            fileName: ''
        }
    }

    handleFormSubmint = (e) => {
        e.preventDefault()
        this.addCustomer()
           .then((response) => {
               console.log(response.data);
               this.props.stateRefresh();
           })
        this.setState({
            file: null,
            userName: '',
            fileName: ''
        })
    }

    handleFileSubmint = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.userName)
        const config = { 
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmint}>
                <h1>加朋友</h1>
                头像： <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileSubmint}/><br/>
                名字: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                <button type= "submit">加</button>
            </form>
        )
    }
}

export default CustomerAdd;