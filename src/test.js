import {React,useState,useEffect} from 'react';
import {Alert} from 'reactstrap'
import './style.css'
import Nav from './nav'
import supabase from './supabaseClient';
import { useNavigate } from 'react-router-dom';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'

// Set the date we're counting down to
var day="12" //01-31
var mon="feb" //jan-dec
var year="2023"
var countDownDate = new Date(mon+" "+day+","+year+ " 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =days + "d " + hours + "h "
  +   minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    var statusstr=document.getElementById("demo").innerHTML;
    var btn=document.getElementById("btn")
if(statusstr==="EXPIRED"){btn.classList.add("disabled")
btn.classList.remove("btn-primary")
btn.classList.add("btn-danger")}
  }
}, 1000);




const TestStart = () => {
    const [usn,setUsn]=useState('')
    const navigate = useNavigate();

    useEffect( ()=>{
        if(usn.length >= 10){
            document.getElementById("btn").classList.remove("disabled");

checkAvail();
        }

    },[usn]);

    const checkAvail =async () =>{
        const result = await  supabase
            .from( 'students')
            .select('usn')
            var i=0
            
            while(i<result.data.length){
                if(result.data[i].usn.toString()===usn.toString()){
                  
               console.log("found")
               return;
                }
                i++;
            }
            document.getElementById("alert").innerHTML="invalid usn please try again"
    }
    

    return(<>
   <Nav/>
   <Alert color="danger"  className="exp animate__animated animate__fadeInDown"><span>The test link expires in:  &nbsp;</span><span id="demo"></span></Alert>
   <Breadcrumb id="nb" >
        <BreadcrumbItem ><a href="/" >Noticeboard</a></BreadcrumbItem >
        <BreadcrumbItem active >Test login</BreadcrumbItem >
</Breadcrumb>
    <div class="main animate__animated animate__lightSpeedInLeft">
        <form method="get" action='/test/session'>
            <label class="row"  for="name">Enter Your USN:</label><br/>
            <input id="usn" class="row" name='USN' type="text" value={usn} onChange={(e)=>setUsn(e.target.value)}  placeholder="USN in lowercase"/>
            <p id="alert" style={{color:'red',opacity:'0.7',fontSize:'.9rem'}}></p>
            <button  id="btn" class="btn btn-success btn-lg row disabled" >Start Test</button>
        </form>
    </div>
    <div class="animate__animated animate__lightSpeedInLeft">
        <h6 align="center">NOTE:</h6>
        <ul>
        <li align="center">This test is valid only once per user</li>
        <li align="center">Finish the test within given time limit</li>
        <li align="center">Check the leaderboard after end test</li>
        <li align="center">Try to answer each question under 1 minute</li>

    </ul>

    </div>
<footer>
<center><p>Made with 💜 for VCETians</p></center>
</footer>
    </>);
}

export default TestStart;