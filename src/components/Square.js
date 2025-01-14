import React, { Component } from "react";
import "./Square.css"

export default class Square extends Component{
    
    render() {
        return (
            <button className="suqare"  onClick={() => {this.props.onClick()}}>
                {this.props.value}
            </button>
        )
    }
}