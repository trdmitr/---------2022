import React from "react";
import "./modal.css";
  export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal" id="modal">
             <div className="content">{this.props.children}</div>             
            </div>
          );
    }
  }