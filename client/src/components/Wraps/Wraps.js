import React, { Component } from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import WrapCard from './WrapCard'

export default class Wraps extends Component {
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
      <PageWrapper title="wraps">
        <div style={{padding: '0 10px'}}>
          {wraps.map(wrap => <WrapCard key={wrap._id} wrap={wrap}/>)}
        </div>
      </PageWrapper>
    )
  }
}
