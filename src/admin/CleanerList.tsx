import * as React from 'react';
import { CleanerComponent } from './CleanerComponent';
import { Cleaner} from '../app/Types';

interface CleanerListProps {
    cleaners: Cleaner[];
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
                            <CleanerComponent cleaner={cleaner} />
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
