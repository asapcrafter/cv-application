import React from 'react';

function Form() {

    return (
        <div>
            <form id="form1">
                <input 
                    type="text" 
                    name="name" id="name" placeholder="Name" 
                />
                <input 
                    type="email" 
                    name="email" id="email" placeholder="Email"
                />
                <input 
                    type="tel" 
                    name="tel" id="number" placeholder="123-4567-8901" 
                    maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"   required
                />
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </form>
            <form id="form2">
                <input 
                    type="text" 
                    name="school" id="school" placeholder="School name"
                />
                <input 
                    type="text" 
                    name="degree" id="degree" placeholder="Field of study"
                />
                <input 
                    type="date" 
                    name="date" id="school-date" 
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
                />
                <input 
                    type="text" 
                    name="title" id="title" placeholder="Title"
                />
                <input 
                    type="text" 
                    name="role" id="role" placeholder="Primary role"
                />
                <input 
                    type="date" 
                    name="work-date" id="work-date1" 
                />
                <input 
                    type="date" 
                    name="work-date" id="work-date2" 
                />
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
    );
}

export default Form