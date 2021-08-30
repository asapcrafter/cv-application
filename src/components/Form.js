import React, { Component } from 'react';
import Body from './Body';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'test',
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


    handleChange = e => {
        this.setState({value: e.target.value});
    }   

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        name="name" id="name" placeholder="Name" 
                        value={this.state.name}
                    />
                    <input 
                        type="email" 
                        name="email" id="email" placeholder="Email"
                        value={this.state.email}
                    />
                    <input 
                        type="tel" 
                        name="tel" id="phone" placeholder="123-4567-8901" 
                        maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                        value={this.state.phone}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form >
                <form id="form2" >
                    <input 
                        type="text" 
                        name="school" id="school" placeholder="School name"
                        value={this.state.school}
                    />
                    <input 
                        type="text" 
                        name="degree" id="degree" placeholder="Field of study"
                        value={this.state.degree}
                    />
                    <input 
                        type="date" 
                        name="date" id="schoolDate" 
                        value={this.state.schoolDate}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form>
                <form id="form3">
                    <input 
                        type="text" 
                        name="company" id="company" placeholder="Company name"
                        value={this.state.company}
                    />
                    <input 
                        type="text" 
                        name="title" id="jobTitle" placeholder="Title"
                        value={this.state.jobTitle}
                    />
                    <input 
                        type="text" 
                        name="role" id="jobRole" placeholder="Primary role"
                        value={this.state.jobRole}
                    />
                    <input 
                        type="date" 
                        name="work-date" id="workDateStart" 
                        value={this.state.workDateStart}
                    />
                    <input 
                        type="date" 
                        name="work-date" id="workDateEnd" 
                        value={this.state.workDateEnd}
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                    />
                </form>
                <div>
                    <Body info={this.state}/>
                </div>
            </div>
        );
    }
}

export default Form