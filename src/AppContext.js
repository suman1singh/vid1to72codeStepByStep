import React, { Component } from "react";
import { CommonContext } from "./componentContext/CommonContext";
import Footer from "./componentContext/Footer";
import Header from "./componentContext/Header";
import Main from "./componentContext/Main";
import UpdateButton from "./componentContext/UpdateButton";

export default class AppContext extends Component {
    constructor()
    {
        super()
        this.updateColor=(color)=>{
            this.setState({
                color:color
            })
        }
        this.state={
            color:"green",
            updateColor:this.updateColor
        }
        
    }
  render() {
    return (
      <div>
        <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer>
            {
                ({color})=>(
                    <h1 style={{ backgroundColor:color }}>Complete and easy example for Context API</h1>
                )
            }
        </CommonContext.Consumer>
          
          <Main />
          <UpdateButton />
          <Footer />
        </CommonContext.Provider>
      </div>
    );
  }
}
