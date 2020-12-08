import React, { Component } from 'react';
import Child from "./Child";

class App extends Component {
 render() {
   return (
     <div>
       <h1>My React App with Webpack!</h1>
       <Child />
     </div>
   );
 }
}

export default App;