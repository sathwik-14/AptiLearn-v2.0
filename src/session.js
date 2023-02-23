import React, { useEffect, useState } from "react";
import Nav from './nav';
import {Alert,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import Fire from './fire-joypixels.gif'
import { useNavigate } from "react-router-dom";
import supabase from "./supabaseClient";
import data from './data.json'

const Session = () =>{
const navigate=useNavigate();
var total=0;
    const [usn,setUsn] =useState('')
    const [testTaken,setTesttaken] =useState('')
    


    useEffect(()=>{
        const usnin=window.location.href.toString().split("=")[1]
        setUsn(usnin)
        if(usnin.length<10)navigate("/test")
  
        var fiveMinutes = 60 * 5,
display = document.getElementById("cd");
var timer = fiveMinutes, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = fiveMinutes;
    }
}, 1000);
       

    });


   
    

    const checkElig=async()=>{
        const result = await  supabase
        .from( 'students')
        .select('test1,total')
        .match({"usn":usn})
        console.log(result.data[0].total)
        total+=result.data[0].total
        const testtaken=result.data[0].test1.toString();
     
        setTesttaken(testtaken)
      
    }
    checkElig();



var answers = data.ans;
console.log(answers.length)
var    tot = answers.length;
const getCheckedValue = (radioName)=> {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
const getScore=()=> {
  
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    total+=score;
    console.log(total);
    return score;
    
}
const returnScore=()=> {
    document.getElementById("myresults").innerHTML =
        "Your score is\n " + getScore() + "/" + tot ;
    
    localStorage.visited=true
    document.getElementById("ans").classList.add("disabled")
    document.getElementById("alert").style.display="block"
    updateTotal();
}

const updateTotal=async ()=> {

const { error } = await supabase
.from('students')
.update({ 'total': total ,'test1':true})
.eq('usn', usn)
console.log("update succesfull")
if(error)console.log(error);

}


   



   






    if(testTaken === "false"){

    return(
    <div>
    <Nav />
    <Alert color="danger"  className="exp animate__animated animate__fadeInDown"><span>Test auto submit in:  &nbsp;</span><span id="cd"></span></Alert>
    <div class="questions" >
        <ul class="quiz">
            <li>
                <h4>{data.questions[0]}</h4>
                <ul class="choices">
                    <li>
                        <label
                            ><input type="radio" name="question0" value="A" /><span
                                >{data.q1[0]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question0" value="B" /><span
                                >{data.q1[1]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question0" value="C" /><span
                                >{data.q1[2]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question0" value="D" /><span
                                >{data.q1[3]}</span
                            ></label
                        >
                    </li>
                </ul>
            </li>
            <li>
                <h4>{data.questions[1]}</h4>
                <ul class="choices">
                    <li>
                        <label
                            ><input type="radio" name="question1" value="A" /><span
                                >{data.q2[0]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question1" value="B" /><span
                                >{data.q2[1]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question1" value="C" /><span
                                >{data.q2[2]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question1" value="D" /><span
                                >{data.q2[3]}</span
                            ></label
                        >
                    </li>
                </ul>
            </li>
            <li>
                <h4>{data.questions[2]}</h4>
                <ul class="choices">
                    <li>
                        <label
                            ><input type="radio" name="question2" value="A" /><span
                                >{data.q3[0]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question2" value="B" /><span
                                >{data.q3[1]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question2" value="C" /><span
                                >{data.q3[2]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question2" value="D" /><span
                                >{data.q3[3]}</span
                            ></label
                        >
                    </li>
                </ul>
            </li>
            <li>
                <h4>{data.questions[3]}</h4>
                <ul class="choices">
                    <li>
                        <label
                            ><input type="radio" name="question3" value="A" /><span
                                >{data.q4[0]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question3" value="B" /><span
                                >{data.q4[1]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question3" value="C" /><span
                                >{data.q4[2]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question3" value="D" /><span
                                >{data.q4[3]}</span
                            ></label
                        >
                    </li>
                </ul>
            </li>
            <li>
                <h4>{data.questions[4]}</h4>
                <ul class="choices">
                    <li>
                        <label
                            ><input type="radio" name="question4" value="A" /><span
                                >{data.q5[0]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question4" value="B" /><span
                                >{data.q5[1]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question4" value="C" /><span
                                >{data.q5[2]}</span
                            ></label
                        >
                    </li>
                    <li>
                        <label
                            ><input type="radio" name="question4" value="D" /><span
                                >{data.q5[3]}</span
                            ></label
                        >
                    </li>
                </ul>
            </li>
            
        </ul>
        <button id="ans" className="view-results btn btn-primary " onClick={returnScore}>End Test</button><br/>
        <div class="jumbotron jumbotron-fluid">
           
                <div><h2 id="myresults" className="my-results">Results will appear here</h2>
                <p id="alert" style={{display:'none'}}>dont forget to check the <a href="/lb" className="alert-link  animate__animated animate__lightSpeedInLeft">Leaderboard!</a><img src={Fire} alt="lit" width="25" height="25"/></p>
                </div> 
           
        </div>
    </div>
   
    </div>
    );
    }
    else{
        return(
            <>
            <Nav/>
           
            <Breadcrumb id="nb" >
        <BreadcrumbItem ><a href="/" >Noticeboard</a></BreadcrumbItem >
        <BreadcrumbItem ><a href="/test" >Go back</a></BreadcrumbItem >
</Breadcrumb>
            <Alert>You have already taken up the test!</Alert>
            <p id="alert">Want to know how your friends are doing? then dont miss to check out <a href="/lb" className="alert-link  animate__animated animate__lightSpeedInLeft">Leaderboard!</a><img src={Fire} alt="lit" width="25" height="25"/></p>
            <footer>
<center><p>Made with 💜 for VCETians</p></center>
</footer>
            </>
        );
        }
}

export default Session;