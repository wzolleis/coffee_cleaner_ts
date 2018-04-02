import * as React from 'react';
import { connect } from 'react-redux';
import { State, Cleaner, Team } from '../app/Types';
import { Dispatch } from 'redux';
import { addCleaner, loadData } from '../app/Actions';
import { CleanerList } from './CleanerList';
import { TeamList } from './Teamlist';

export interface AdminContainerProps {
    cleaners: Cleaner[];
    teams: Team[];
}

export interface CleanerDispatch {
    onAddCleaner: (cleaner: Cleaner) => void;
    onLoadAppData: () => void;
}

class AdminContainer extends React.Component<AdminContainerProps & CleanerDispatch> {
    componentDidMount() {
        this.props.onLoadAppData();
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading c-list">
                        <span className="title centered">Die lästige Datenverwaltung</span>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CleanerList cleaners={this.props.cleaners} />
                        </div>
                        <div className="list-arrows col-md-1 text-center">
                            <button className="btn btn-default btn-sm move-left">
                                <span className="fa fa-glyphicon fa fa-chevron-left"/>
                            </button>
                            <button className="btn btn-default btn-sm move-right">
                                <span className="fa fa-glyphicon fa fa-chevron-right"/>
                            </button>
                        </div>
                        <div className="col">
                            <TeamList teams={this.props.teams} />
                        </div>
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

const mapStateToProps = (state: State): AdminContainerProps => {
    return {
        cleaners: state.cleaners,
        teams: state.teams
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);   