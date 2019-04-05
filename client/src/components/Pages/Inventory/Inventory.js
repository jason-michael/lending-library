import React from 'react';
import axios from 'axios';
import InventoryHeader from './InventoryHeader';
import { Button, Divider, Icon, Table } from 'semantic-ui-react';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAllWraps = () => this.props.fetchAllWraps(wraps => this.setState({ wraps }));

  deleteWrap = id => {
    axios.delete('/api/wraps/', {data: { id }})
    .then(res => this.getAllWraps());
  }

  // ! Remove
  toggleAvailable = (id, isAvailable) => {
    axios.put('/api/wraps/', {id, isAvailable})
    .then(res => this.getAllWraps());
  }

  componentDidMount = () => this.getAllWraps();

  render() {
    const { wraps } = this.state;

    const wrapRows = (wraps) ? (
        wraps.map((wrap, i) => (
          <Table.Row key={i}>
            <Table.Cell>{wrap.brand}</Table.Cell>
            <Table.Cell>{wrap.name}</Table.Cell>
            <Table.Cell>{wrap.type || '-'}</Table.Cell>
            <Table.Cell>{wrap.size}</Table.Cell>
            <Table.Cell textAlign="center">
              <Icon name={wrap.isAvailable ? 'check' : 'close'} color={wrap.isAvailable ? 'green' : 'red'} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Button icon onClick={() => this.toggleAvailable(wrap._id, !wrap.isAvailable)}>
                <Icon name={wrap.isAvailable ? 'user outline' : 'user cancel'} />
              </Button>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Button icon onClick={() => this.deleteWrap(wrap._id)}>
                <Icon name="trash" />
              </Button>
            </Table.Cell>
        </Table.Row>
        ))
    ) : (
      <div style={{padding: '20px 10px'}}>Loading wraps...</div>
    );

    // TODO: clean up this trash
    const totalWraps = (wraps) ? wraps.length : '...';
    let availableWraps = 0;
    const totalAvail = (wraps) ? wraps.forEach(wrap => {
      if (wrap.isAvailable) availableWraps++;
    }) : '-';

    return (
      <div>
        <InventoryHeader totalWraps={totalWraps} availableWraps={availableWraps} getAllWraps={this.getAllWraps}/>
        <Divider/>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={3}>Brand</Table.HeaderCell>
              <Table.HeaderCell width={3}>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Size</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Available</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Lend/Return</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {wrapRows}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
