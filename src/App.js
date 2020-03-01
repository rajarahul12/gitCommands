import React from "react";
import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Popover, Button, Menu, Position } from "@blueprintjs/core";
import MenuItem from "./components/MenuItem/MenuItem";
import TypedOutput from "./components/TypeOutput/TypedOutput";

export default class App extends React.Component {
  state = {
    command: "...",
    output: "git add filename",
    note: "...",
    commands: [
      "add",
      "clone",
      "commit",
      "compare two commits",
      "configure",
      "debug",
      "delete/remove",
      "ignore",
      "initialize",
      "merge",
      "modify",
      "rebase",
      "recover",
      "rename",
      "revert/reset",
      "show/view",
      "squash",
      "stash",
      "synchronize"
    ]
  };

  handleMenuItemChange = menuItem => {
    this.setState({
      command: menuItem
    });
  };

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="first">
            <h2>
              Git <span className="green">Command</span> Explorer
            </h2>
            <p>Find the right commands needed for Git</p>
            <div style={{ marginTop: "40px" }}>
              <Popover
                content={
                  <Menu style={{ height: "300px", overflow: "scroll" }}>
                    {this.state.commands.map((command, index) => {
                      return (
                        <MenuItem
                          key={index}
                          handleMenuItemChange={this.handleMenuItemChange}
                          menuText={command}
                        />
                      );
                    })}
                  </Menu>
                }
                position={Position.BOTTOM}
              >
                <Button
                  style={{ width: "420px", padding: "15px 350px 15px 10px" }}
                  text={this.state.command}
                />
              </Popover>
            </div>
          </div>
          <div className="second">
            <h2>Usage</h2>
            <TypedOutput strings={[this.state.output]} />
          </div>
        </div>
      </div>
    );
  }
}
