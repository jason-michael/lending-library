import React from 'react';
import AddWrapModal from './AddWrapModal';
import { Grid, Statistic, Button, Icon } from 'semantic-ui-react';

const { Row, Column } = Grid;

export default props => (
  <Grid>
    <Row>
      <Column width={8}>
        <Statistic size="mini" label="Total" value={props.totalWraps} />
        <Statistic size="mini" label="Available" value={props.availableWraps} />
        <Statistic size="mini" label="Overdue" value={"0"} />
      </Column>
      <Column width={8} textAlign="right">
        <AddWrapModal getAllWraps={props.getAllWraps}/>
        <Button icon size="big"><Icon name="search" /></Button>
      </Column>
    </Row>
  </Grid>
);

