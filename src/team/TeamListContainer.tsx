import * as React from 'react';
import { TeamComponent } from './TeamComponent';
import { Team, State } from '../Types';
import { connect } from 'react-redux';

type TeamListProps = {
    teams: Team[]
};

class TeamListContainer extends React.Component<TeamListProps> {

    render() {
        const elements = this.props.teams.map((team: Team, index: number) => {
            return <TeamComponent key={index} name={team.name}/>;
        });
        return (
            <React.Fragment>{elements}</React.Fragment>
        );
    }

}

const mapStateToProps = (state: State): TeamListProps => ({teams: state.teams});

export const TeamList = connect(mapStateToProps, null)(TeamListContainer);