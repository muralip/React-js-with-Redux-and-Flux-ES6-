

import React from 'react';
class App extends React.Component {
  render(){
    return <Button>I <Heart/> React</Button>
  }
}
// stateless componnet 

class Button extends React.Component {
  render(){
    return <button>{this.props.children}</button>
    // I <span className="glyphicon glyphicon-heart"></span>  React
  }
}

const Heart = props => <span className="glyphicon glyphicon-heart"></span>



export default App
