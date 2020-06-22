import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;

        return (
            <div style={{ height: 300, display: 'flex', flexDirection: 'column', border: 'solid 1px #ddd' }}>
                <div style={{ height: 100, display: 'flex' }}>
                    <img style={{ height: 100, width: 100}} src='/resources/avatar.png'></img>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>{member.name}</p>
                        <p>{member.description}</p>
                    </div>
                </div>
                <p>{member.summary}</p>
            </div>
        );
    }
}