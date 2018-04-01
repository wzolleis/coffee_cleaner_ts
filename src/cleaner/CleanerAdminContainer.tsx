import * as React from 'react';
import { connect } from 'react-redux';
import { State, Cleaner, Team } from '../app/Types';
import { Dispatch } from 'redux';
import { addCleaner, loadData } from '../app/Actions';
import { CleanerList } from './CleanerList';

export interface CleanerAdminContainerProps {
    cleaners: Cleaner[];
    teams: Team[];
}

export interface CleanerDispatch {
    onAddCleaner: (cleaner: Cleaner) => void;
    onLoadAppData: () => void;
}

class CleanerAdminContainer extends React.Component<CleanerAdminContainerProps & CleanerDispatch> {
    componentDidMount() {
        this.props.onLoadAppData();
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-offset-3 col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading c-list">
                            <span className="title">Reinigungsfachkräfte</span>
                        </div>
                        <CleanerList cleaners={this.props.cleaners} teams={this.props.teams} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): CleanerDispatch => ({
    onAddCleaner: (cleaner: Cleaner) => dispatch(addCleaner.started({ cleaner })),
    onLoadAppData: () => dispatch(loadData.started({}))
});

const mapStateToProps = (state: State): CleanerAdminContainerProps => {
    return {
        cleaners: state.cleaners,
        teams: state.teams
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CleanerAdminContainer);   