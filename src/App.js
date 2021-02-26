
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './componets/Chat'
import Login from './componets/Login'
import styled from 'styled-components'
import Header from './componets/Header'
import Sidebar from './componets/Sidebar'
import db from './firebase'
import {useEffect, useState} from 'react'
import {auth, provide} from './firebase'


function App() {
  
  const[rooms,setRooms]= useState([])
  const[user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () =>{
      db.collection('rooms').onSnapshot((snapshot)=>{
        setRooms(snapshot.docs.map((doc)=>{
          return {id: doc.id, name: doc.data().name}
        }))
      })
  }

  const singOut = () =>{
      auth.signOut().then(()=>{
        localStorage.removeItem('user');
        setUser(null);
      })
  }

  useEffect(()=>{
    getChannels();
  },[]
  )
  
  return (



    <div className="App">

      <Router>
        {
          !user ?
          <Login setUser={setUser}/> 
          :
        <Container>
          <Header singOut={singOut} user={user} />

          <Main>
            <Sidebar rooms ={rooms}/>
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user}/>
              </Route>

              <Route path="/">
                Selecto or create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
        }
      </Router>

    </div>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 38px minmax(0,1fr);
`
const Main = styled.div`
  
  display: grid;
  grid-template-columns: 260px auto;
`