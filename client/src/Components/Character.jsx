import React from 'react'; 

class Character extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.character.name}</li>
            </ul>
        )
    }
}

export default Character;