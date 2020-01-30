import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
            name='bacterias list'
            active={activeItem === 'bacteriasList'}
            onClick={this.handleItemClick}
            href='/bacterias'
        >
            Bacterias
        </Menu.Item>
    
        <Menu.Item
            name='instruments list'
            active={activeItem === 'instrumentsList'}
            onClick={this.handleItemClick}
            href='/instruments'
        >
            Instruments
        </Menu.Item>

        <Menu.Item
            name='teams list'
            active={activeItem === 'teamsList'}
            onClick={this.handleItemClick}
            href='/teams'
        >
          Teams
        </Menu.Item>
      </Menu>
    )
  }
}