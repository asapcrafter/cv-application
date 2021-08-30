import React, { Component } from 'react';

function Info(i) {
    return (
        <div>

        </div>
    )
}

class Body extends Component {

    renderInfo(i) {
        return (
            Info(i)
        )
    }

    render() {
        return (
            <div>
                <div className="personal-info">
                    {this.renderInfo('name')}
                </div>
                <div className="education-info">
                    Hello
                </div>
            </div>
        );
    }
}

export default Body
