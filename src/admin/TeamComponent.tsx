import * as React from 'react';
import { Team } from '../app/Types';

export interface TeamComponentProps {
    team: Team;
}

export class TeamComponent extends React.Component<TeamComponentProps> {
  render() {
    return (
      <div>
        {this.props.team.name}
      </div>
    );
  }
}
