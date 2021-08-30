import React, { Component } from 'react';
import Body from './Body';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            school: '',
            degree: '',
            schoolDate: '',
            company: '',
            jobTitle: '',
            jobRole: '',
            workDateStart: '',
            workDateEnd: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
    }

    onChange = e => {
        const value = e.target.id;
        this.setState({[value]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" id="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input 
                        type="email" 
                        name="email" id="email" placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input 
                        type="tel" 
                        name="tel" id="phone" placeholder="123-456-7890" 
                        maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                        value={this.state.phone}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form >
                <form id="form2" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="school" id="school" placeholder="School name"
                        value={this.state.school}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        name="degree" id="degree" placeholder="Field of study"
                        value={this.state.degree}
                        onChange={this.onChange}
                    />
                    <input 
                        type="date" 
                        name="date" id="schoolDate" 
                        value={this.state.schoolDate}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form>
                <form id="form3" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="company" id="company" placeholder="Company name"
                        value={this.state.company}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        name="title" id="jobTitle" placeholder="Title"
                        value={this.state.jobTitle}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        name="role" id="jobRole" placeholder="Primary role"
                        value={this.state.jobRole}
                        onChange={this.onChange}
                    />
                    <input 
                        type="date" 
                        name="work-date" id="workDateStart" 
                        value={this.state.workDateStart}
                        onChange={this.onChange}
                    />
                    <input 
                        type="date" 
                        name="work-date" id="workDateEnd" 
                        value={this.state.workDateEnd}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form>
            </div>
        );
    }
}

export default Form