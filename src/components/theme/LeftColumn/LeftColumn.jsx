import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import FirstLevelFolders from '@itonboard/volto-itonboard-theme/components/theme/FirstLevelFolders/FirstLevelFolders';

class LeftColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Segment>
        <FirstLevelFolders />
      </Segment>
    );
  }
}

export default LeftColumn;
