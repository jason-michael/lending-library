import React, { Component } from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'

export default class extends Component {
  constructor() {
    super()
    this.state = { wraps: [] }
  }

  fetchWraps = callback => {
    fetch('/api/wraps')
    .then(res => res.json())
    .then(data => callback(data))
  }

  componentDidMount = () => {
    this.fetchWraps(wraps => this.setState({ wraps }))
  }

  render() {
    const { wraps } = this.state
    return (
      <PageWrapper title="Lending Library">
        <hr style={{ width: '80%', border: 'none', borderTop: '1px solid #ddd', margin: '0 auto' }} />
        <div style={{ display: 'flex', width: '50%', margin: '0 auto' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p>Wraps</p>
            <p>Available</p>
            <p>Overdue</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <p>{wraps.length || '-'}</p>
            <p>{wraps.filter(w => w.isAvailable).length || '-'}</p>
            <p>{wraps.filter(w => w.overdue).length || '-'}</p>
          </div>
        </div>
      </PageWrapper>
    )
  }
}
