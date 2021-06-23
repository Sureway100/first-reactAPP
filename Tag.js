import React from 'react';

export class Nav extends React.Component {
  render() {
    
    return (
        <button onClick={this.props.menu}>
          Click me!
        </button>
      
      
    );
  }
}


export default Nav;