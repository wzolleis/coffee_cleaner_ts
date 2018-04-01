import * as React from 'react';
import { Team, Cleaner } from '../app/Types';

export interface TeamSelectionComponentProps {
    cleaner: Cleaner;
    teams: Team[];
    onTeamSelectionChange: React.MouseEventHandler<HTMLButtonElement>;
}

export class TeamSelectionComponent extends React.Component<TeamSelectionComponentProps> {
    render() {
        const items = this.props.teams.map((team) => {
            return (
                <button
                    key={team.id}
                    onClick={this.props.onTeamSelectionChange}
                    className="dropdown-item"
                    data-id={team.id}
                    data-name={team.name}
                    data-cleaner-name={this.props.cleaner.name}
                    data-cleaner-id={this.props.cleaner.id}
                >
                    {team.name}
                </button>
            );
        });

        return (
            <div className="dropdown" >
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Team
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {items}
                </div>
            </div >
        );
    }
}
