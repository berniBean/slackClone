
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './componets/Chat'
import Login from './componets/Login'
import styled from 'styled-components'
import Header from './componets/Header'
import Sidebar from './componets/Sidebar'
import db from './firebase'
import {useEffect, useState} from 'react'


function App() {
  
  const[rooms,setRooms]= useState([])

  const getChannels = () =>{
      db.collection('rooms').onSnapshot((snapshot)=>{
        setRooms(snapshot.docs.map((doc)=>{
          return {id: doc.id, name: doc.data().name}
        }))
      })
  }

  useEffect(()=>{
    getChannels();
  },[]
  )

  console.log(rooms);
  
  return (



    <div className="App">

      <Router>
        <Container>
          <Header />

          <Main>
            <Sidebar rooms ={rooms}/>
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>

              <Route path="/">
                <Login />
              </Route>

            </Switch>
          </Main>
        </Container>
      </Router>

    </div>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 38px auto;
`
const Main = styled.div`
  
  display: grid;
  grid-template-columns: 260px auto;
`