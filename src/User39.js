import React from 'react'

export default class User39 extends React.PureComponent {
  render() {
      console.log(" user component check re-rendering")
    return (
      <div>
          <h1>
             User Component{this.props.count}
          </h1>
      </div>
    )
  }
}
