import './App.css';
import UseState from './UseState/UseState';
import Example from './UseState/Example';
import UseReducer from "./UseReducer/ReducerTutorial";
import ContacCaert from './ContactCart.js/ContactCart';
import { useEffect, useState } from 'react';
import Header from './ContactCart.js/header';

function App() {
  // const contacts = [{
  //   avatarUrl: "https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
  //   name: 'asjib 1',
  //   email: "anosajib@gmail.com",
  //   age: ' 30'
  // },
  // {
  //   avatarUrl: "https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
  //   name: 'asjib 2',
  //   email: "anosajib@gmail.com",
  //   age: ' 32'
  // },
  // {
  //   avatarUrl: "https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
  //   name: 'asjib 3',
  //   email: "anosajib@gmail.com",
  //   age: ' 33'
  // },
  // {
  //   avatarUrl: "https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
  //   name: 'asjib 3',
  //   email: "anosajib@gmail.com",
  //   age: ' 33'
  // },
  // ]
  const [results,setResults] = useState([])
  useEffect(()=>{
     fetch("https://randomuser.me/api?results=20")
    .then(response => response.json())
    .then(data => {console.log(data)
    setResults(data.results)
    });
  }, [])


  return (
    // <div className="App">
    //   {/* <UseReducer /> */}
    //   <Example />

    // </div>


    <div>
         <Header handleToggleDarkMode={Header} />
      {results.map((result, index) => {
        return (
          <ContacCaert key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            lname={result.name.last}
            email={result.email}
            age={result.dob.age}
          />
        )
      })}
      {/* <ContacCaert
        avatarUrl="https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
        name='asjib 1'
        email="anosajib@gmail.com"
        age= { 30 }
      />
      <ContacCaert 
         avatarUrl="https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
         name='asjib 2'
         email="anosajib2@gmail.com"
         age= { 20 }

      />
      <ContacCaert 
         avatarUrl="https://images.unsplash.com/photo-1649074672958-d3829976f852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
         name='asjib 3'
         email="anosajib3@gmail.com"
         age= { 33 }
      /> */}
    </div>

  );
}

export default App;
