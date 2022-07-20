
import React, {useState} from "react";
import Hello from "./sayHello";
import Tweet from "./Tweet";


function App(){

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hi there', likes: "47"},
    {name: 'John', message: 'I am James Bond', likes: "12"},
    {name: 'Traversy', message: 'Mediaaaaaa', likes: "17"},

  ])

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} msg={user.message} likes={user.likes}/>

      ))}
    </div>
  );
}

export default App; 