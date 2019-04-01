import React from 'react';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('Fetching wraps...')
    this.props.fetchAllWraps(wraps => {
      this.setState({ wraps });
    });
  }



  render() {
    const { wraps } = this.state;

    const wrapList = (wraps) ? (
      <ul>
        <hr/>
        {wraps.map((wrap, i) => (
          <div key={i}>
            <ul>
              <li>Lender Name: {wrap.lenderName}</li>
              <li>Lender Number: {wrap.lenderNumber}</li>
              <li>Wrap ID: {wrap._id}</li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    ) : (
      <div>Loading wraps...</div>
    );

    return (
      <div>
        <h1>INVENTORY</h1>
        {wrapList}
      </div>
    )
  }
}
