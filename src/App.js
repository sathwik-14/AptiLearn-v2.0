import './App.css';
import {React} from 'react';
import { Card,  CardTitle,Badge} from 'reactstrap';
import './styles.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Alert } from 'reactstrap';
import Fire from './fire-joypixels.gif';
import Nav from './nav.js';


let notice="Test #1 of  MAR-23 batch is uploaded";



function App() {

 

  return (
    <div className="App">
     
     <Nav/><br></br>

     <Card  body inverse style={{ backgroundColor: '#53354A', borderColor: '#333',textAlign:'left' }}>
        <CardTitle><h1>Hello<br/>AptiLearners!</h1></CardTitle>
        
      </Card><br></br>
      <>
     <Breadcrumb id="nb">
        <BreadcrumbItem ><a href="#nb" >Noticeboard</a></BreadcrumbItem >      </Breadcrumb>
  
  </>
  <Alert color="success" >
    <Badge color="primary">
  New
</Badge>
  <h4>{notice}</h4><br/><a href="/Test" className='btn btn-outline-danger md'>Take Test</a>
</Alert>
<p>dont forget to check the <a href="/lb" className="alert-link">Leaderboard!</a><img src={Fire} alt="lit" width="25" height="25"/></p>


<footer>
  <center><p>Made with 💜 for VCETians</p></center>
</footer>
    </div>
  );
}

export default App;
