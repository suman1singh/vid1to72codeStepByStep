import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <CommonContext.Consumer>
            {
                ({color})=>(
                    <h1 className='footer' style={{ backgroundColor:color }}>Hello, This is Footer page</h1>
                )
            }
        </CommonContext.Consumer>
      </div>
    )
  }
}
