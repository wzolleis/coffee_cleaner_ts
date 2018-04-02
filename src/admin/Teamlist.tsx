import * as React from 'react';
import { Team } from '../app/Types';

export interface TeamListProps {
    teams: Team[];
}

export class TeamList extends React.Component<TeamListProps> {
  render() {
    return (
      <div>
        <h1>TeamList</h1>
      </div>
    );
  }
}
