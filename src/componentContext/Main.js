import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export default class Main extends Component {
  render() {
    return (
      <div>
        <CommonContext.Consumer>
            {
                ({color})=>(
                    <h1 style={{ backgroundColor:color }}>Hello, This is main page</h1>
                )
            }
        </CommonContext.Consumer>
      </div>
    )
  }
}
