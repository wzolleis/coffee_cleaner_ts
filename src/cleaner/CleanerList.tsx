import * as React from 'react';
import { CleanerComponent } from './CleanerComponent';
import { Cleaner, Team } from '../app/Types';
import { TeamSelectionComponent } from '../team/TeamSelectionComponent';

interface CleanerListProps {
    cleaners: Cleaner[];
    teams: Team[];
}

export class CleanerList extends React.Component<CleanerListProps> {
     onTeamSelectionChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(event.currentTarget.dataset);
    };

    render() {
        const items: React.ReactFragment = this.props.cleaners.map((cleaner) => {
            return (
                <li
                    className="list-group-item"
                    key={cleaner.id}
                >
                    <div className="row">
                        <div className="col">
                            <CleanerComponent cleaner={cleaner} />
                        </div>
                        <div className="col">
                            <TeamSelectionComponent
                                cleaner={cleaner}
                                onTeamSelectionChange={this.onTeamSelectionChange}
                                teams={this.props.teams} 
                            />
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="container">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}
