import * as React from 'react';
import { Cleaner } from '../app/Types';

export interface CleanerProps {
  cleaner: Cleaner;
}

export class CleanerComponent extends React.Component<CleanerProps> {
  render() {
    return (
        <div>
          {this.props.cleaner.name}
        </div>
    );
  }
}