import React from 'react';
import axios from 'axios';
import typeOptions from './typeOptions';
import { Form, Modal, Button, Icon  } from 'semantic-ui-react';

export default class AddWrapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleAdd = () => {
    const getVal = id => document.getElementById(id).value;

    // Form values
    const brand = getVal('brand');
    const name = getVal('name');
    const type = getVal('type');
    const size = getVal('size');

    // Post request
    axios.post('/api/wraps/', { brand, name, type, size })
    .then(res => {
      this.props.getAllWraps();
      this.handleClose();
    });
  }

  render() {
    const modalTrigger = (
      <Button icon size="big" onClick={this.handleOpen}>
        <Icon name="plus" />
      </Button>
    );

    return (
      <Modal size="mini" trigger={modalTrigger} open={this.state.open}>
      <Modal.Header>Add wrap to library</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input id="brand" label="Brand" placeholder="Brand" />
          <Form.Input id="name" label="Name" placeholder="Name" />
          <Form.Dropdown id="type" label="Type" placeholder="Type" selection options={typeOptions} />
          <Form.Input id="size" label="Size" placeholder="Size"/>
          <Form.Group>
            <Form.Button onClick={this.handleClose}>Cancel</Form.Button>
            <Form.Button color="blue" onClick={this.handleAdd}>Add</Form.Button>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
    )
  }
}
