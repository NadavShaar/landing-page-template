import React from 'react';
import Card from './Card.jsx';
import team from './team.json';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto'}}>
                <p style={{fontSize: 20, fontWeight: 500}}>Our Team</p>
                <p>We are a team of veteran fullstack web developers, specialized in react apps, dedicated to building awesome applications from A to Z.</p>
                <p>An accumulative experience of over 30 years with various frameworks and libraries, and a full understanding of the needs of modern web applications, gives us the tools to design, advise, build, test, deploy and maintain a working web application.</p>
                {
                    team.map(member => <Card member={member}/>)
                }
            </div>
        );
    }
}