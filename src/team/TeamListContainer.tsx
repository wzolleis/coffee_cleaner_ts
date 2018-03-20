import * as React from 'react';
import { TeamComponent } from './TeamComponent';
import { Team } from './TeamTypes';

export class TeamListContainer extends React.Component {
    state = {
        teams: []
    };

    componentDidMount() {
        // load teams from server
        const teams: Team[] = [{
            name: 'Udo, Elmar,Michael'
        },
        {
            name: 'Wolfgang, Jürgen, Christian'
        }
        ];
        this.setState({teams});
    }

    render() {
        const elements = this.state.teams.map((team: Team, index: number) => {
                return <TeamComponent key={index} name={team.name}/>;
        });
        return (
            <React.Fragment>{elements}</React.Fragment>
        );
    }
}