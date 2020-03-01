import React, { Component } from "react";
import { MenuItem } from "@blueprintjs/core";

export default class Menuitem extends Component {
  handleClick = menuText => {
    this.props.handleMenuItemChange(menuText);
  };

  render() {
    const { menuText, selected } = this.props;
    console.log(selected);
    return (
      <MenuItem
        active={selected === menuText}
        onClick={() => this.handleClick(menuText)}
        style={{ padding: `15px 340px 15px 5px` }}
        text={menuText}
      />
    );
  }
}
