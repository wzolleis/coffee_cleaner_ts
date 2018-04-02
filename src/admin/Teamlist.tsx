import * as React from 'react';
import { Team } from '../app/Types';
import { TeamComponent } from './TeamComponent';

export interface TeamListProps {
    teams: Team[];
}

export class TeamList extends React.Component<TeamListProps> {
    render() {
        const items: React.ReactFragment = this.props.teams.map((team) => {
            return (
                <li className="list-group-item" key={team.id} >
                    <TeamComponent team={team} />
                </li>
            );
        });
        return (
            <div className="dual-list list-left">
                <div className="text-center">
                    <ul className="list-group">
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}
