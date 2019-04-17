import React, { Component } from 'react';
import axios from 'axios';
import { Badge, Card, Icon, Modal, Button, Col, Row } from 'antd';

const { Meta } = Card;

export default class Wraps extends Component {
  state = {
    modalVisible: false,
    modalWrap: {
      _id: null,
      name: null,
      brand: null,
      type: null,
      size: null,
      isAvailable: null,
      src: null,
      borrowerName: null,
      borrowerNumber: null,
      borrowerEmail: null
    }
  }

  setModalVisible(modalVisible, modalWrap = {}) {
    this.setState({ modalVisible, modalWrap });
  }

  // ! test
  toggleWrap = () => {
    const wrap = this.state.modalWrap;
    axios.put('/api/v1/wraps', { _id: wrap._id, isAvailable: !wrap.isAvailable })
    .then(() => {
      this.setModalVisible(false);
      this.props.fetchWraps();
    })
  }

  render() {
    const { modalWrap } = this.state;
    return (
      <div style={{ padding: '30px', display: 'flex', flexWrap: 'wrap' }}>
        {this.props.wraps.map((wrap, i) => (
          <Badge key={i} dot status={wrap.isAvailable ? 'success' : 'error'} style={{ margin: '6px 6px 0 0'}}>
          <Card
            hoverable
            bordered
            cover={<img alt="" src={wrap.src || 'http://placehold.it/150x150'} style={{ height: 220 }} />}
            style={{ width: 220, margin: 4 }}
            actions={[<div>{wrap.type}</div>, <div>Size {wrap.size}</div>]}
            onClick={() => this.setModalVisible(true, wrap)}
          >
              <Meta title={wrap.name} description={wrap.brand} />
          </Card>
            </Badge>
        ))}
        <Modal
          title={this.state.modalWrap.brand + ' ' + this.state.modalWrap.name}
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => this.setModalVisible(false)}>Cancel</Button>,
            <Button key="edit">Edit</Button>,
            <Button key="lend" type="primary" onClick={this.toggleWrap}>{modalWrap.isAvailable ? 'Lend' : 'Return'}</Button>
          ]}
        >
          <Row>
            <Col span={7}>
              <img src={modalWrap.src} alt="" style={{ width: 120 }}/>
            </Col>
            <Col span={17}>
              <Row>
                <Col span={10}>
                  <p>Borrower Name</p>
                  <p>Borrower Phone</p>
                  <p>Borrower Email</p>
                  <p>Lent on</p>
                </Col>
                <Col span={14}>
                  <p>{modalWrap.borrowerName || '-'}</p>
                  <p>{modalWrap.borrowerNumber || '-'}</p>
                  <p>{modalWrap.borrowerEmail || '-'}</p>
                  <p>04/01/2019</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
