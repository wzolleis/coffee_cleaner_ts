import * as React from 'react';
import { Cleaner } from '../app/Types';

export interface CleanerProps {
  cleaner: Cleaner;
}

export class CleanerComponent extends React.Component<CleanerProps> {
  render() {
    return (
      <span className="btn btn-lg btn-primary ">{this.props.cleaner.name}</span>
    );
  }
}