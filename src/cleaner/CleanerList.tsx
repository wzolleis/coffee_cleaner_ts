import * as React from 'react';
import { CleanerComponent } from './CleanerComponent';
import { State, Cleaner } from '../app/Types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCleaner, loadCleanerList } from '../app/Actions';

export interface CleanerDispatch {
    onAddCleaner: (cleaner: Cleaner) => void;
    onLoadCleanerList: () => void;
}

interface CleanerListProps {
    cleaners: Cleaner[];
}

export class CleanerList extends React.Component<CleanerListProps & CleanerDispatch> {
    componentDidMount() {
        console.log('loading cleaner list');
        this.props.onLoadCleanerList();
    }

    render() {
        return (
            <div>
                <h1>Cleaner Admin</h1>
                <CleanerComponent />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): CleanerDispatch => ({
    onAddCleaner: (cleaner: Cleaner) => dispatch(addCleaner.started({cleaner})),
    onLoadCleanerList: () => dispatch(loadCleanerList.started({}))
});

const mapStateToProps = (state: State): CleanerListProps => ({ cleaners: state.cleaners });

export default connect(mapStateToProps, mapDispatchToProps)(CleanerList);