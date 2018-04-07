import * as React from 'react';
import { Cleaner, Team } from '../app/Types';
import { CleanerComponent } from './CleanerComponent';
import Select from 'react-select';
import '../assets/react-select.css';

interface TeamOption {
    cleaner: Cleaner;
    value: number;
    label: string;
}

interface CleanerListProps {
    cleaners: Cleaner[];
    teams: Team[];
    handleTeamSelection: (cleaner: Cleaner, team: Team) => void;
    handleTeamRemoval: (cleaner: Cleaner) => void;
}

interface CleanerListState {
    selectedOption: TeamOption[];
}

export class CleanerList extends React.Component<CleanerListProps, CleanerListState> {
    onHandleChange = (selectedOption: TeamOption, cleaner: Cleaner) => {
        if (selectedOption) {
            const selection: Team[] = this.props.teams.filter((t) => t.id === selectedOption.value);
            const team: Team = selection[0];
            this.props.handleTeamSelection(cleaner, team);
        } else {
            // todo
            cleaner.team = undefined;
            this.props.handleTeamRemoval(cleaner);
        }
    }

    render() {
        const options: object[] = this.props.teams.map((team: Team) => {
            return (
                {
                    value: team.id,
                    label: team.name
                }
            );
        });

        const items: React.ReactFragment = this.props.cleaners.map((cleaner) => {

            const value: number = cleaner.team ? cleaner.team.id : -1;
            return (
                <li className="list-group-item" key={cleaner.id}>
                    <div className="row">
                        <div className="col">
                            <CleanerComponent cleaner={cleaner} />
                        </div>
                        <div className="col">
                            <Select
                                value={value}
                                onChange={(e: TeamOption) => this.onHandleChange(e, cleaner)}
                                name="form-field-name"
                                options={options}
                            />
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div className="dual-list list-left">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}
