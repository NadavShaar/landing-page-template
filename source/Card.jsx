import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;

        return (
            <div style={{ height: 300, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 60, display: 'flex' }}>
                    <img style={{ height: 60, width: 60}} src='/resources/avatar.png'></img>
                    <p>{member.name}</p>
                </div>
                <p>{member.description}</p>
            </div>
        );
    }
}