import * as React from 'react';
import { Cleaner, Team } from '../app/Types';
import { CleanerComponent } from './CleanerComponent';
import Select from 'react-select';
import '../assets/react-select.css';

interface TeamOption {
    value: number;
    label: string;
}

interface CleanerListProps {
    cleaners: Cleaner[];
    teams: Team[];
}

interface CleanerListState {
    selectedOption?: TeamOption;
}

export class CleanerList extends React.Component<CleanerListProps, CleanerListState> {

    state: CleanerListState = {
        selectedOption: undefined,
    };

    onHandleChange = (selectedOption: TeamOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.value}`);
    };

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
            const selectedOption: TeamOption | undefined = this.state.selectedOption;
            const value = selectedOption && selectedOption.value;
            return (
                <li className="list-group-item" key={cleaner.id} >
                    <div className="row">
                        <div className="col">
                            <CleanerComponent cleaner={cleaner} />
                        </div>
                        <div className="col">
                            <Select
                                value={value}
                                onChange={this.onHandleChange}
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
