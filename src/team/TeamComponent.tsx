import * as React from 'react';

interface TeamProps {
    name: string;
}

export class TeamComponent extends React.Component<TeamProps> {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}