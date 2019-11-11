import React from 'react'; 

class Character extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.char.name}</li>
            </ul>
        )
    }
}