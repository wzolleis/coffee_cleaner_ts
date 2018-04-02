import * as React from 'react';
import { Cleaner } from '../app/Types';
import { CleanerComponent } from './CleanerComponent';

interface CleanerListProps {
    cleaners: Cleaner[];
}

export class CleanerList extends React.Component<CleanerListProps> {
    onTeamSelectionChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(event.currentTarget.dataset);
    }

    render() {
        const items: React.ReactFragment = this.props.cleaners.map((cleaner) => {
            return (
                <li className="list-group-item" key={cleaner.id} >
                    <CleanerComponent cleaner={cleaner} />
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
