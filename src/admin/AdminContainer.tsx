import * as React from 'react';
import { connect } from 'react-redux';
import { State, Cleaner, Team } from '../app/Types';
import { Dispatch } from 'redux';
import { addCleaner, loadData, addCleanerToTeam } from '../app/Actions';
import { CleanerList } from './CleanerList';

export interface AdminContainerProps {
    cleaners: Cleaner[];
    teams: Team[];
}

export interface CleanerDispatch {
    onAddCleaner: (cleaner: Cleaner) => void;
    onLoadAppData: () => void;
    onAddCleanerToTeam: (cleaner: Cleaner, team: Team) => void;

}

class AdminContainer extends React.Component<AdminContainerProps & CleanerDispatch> {
    componentDidMount() {
        this.props.onLoadAppData();
    }

    handleTeamSelection = (cleaner: Cleaner, team: Team) => {
            console.log('handleTeamSelection: cleaner=', cleaner, 'team=', team);
            this.props.onAddCleanerToTeam(cleaner, team);
    };

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading c-list">
                        <span className="title centered">Die lästige Datenverwaltung</span>
                    </div>
                    <CleanerList 
                        cleaners={this.props.cleaners} 
                        teams={this.props.teams} 
                        handleTeamSelection={this.handleTeamSelection}
                    />
                    <p />
                    <span className="submit-btn">
                        <button className="btn btn-primary">Speichern</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): CleanerDispatch => ({
    onAddCleaner: (cleaner: Cleaner) => dispatch(addCleaner.started({ cleaner })),
    onLoadAppData: () => dispatch(loadData.started({})),
    onAddCleanerToTeam: (cleaner: Cleaner, team: Team) => dispatch(addCleanerToTeam.started({cleaner, team}))
});

const mapStateToProps = (state: State): AdminContainerProps => {
    return {
        cleaners: state.cleaners,
        teams: state.teams
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);   