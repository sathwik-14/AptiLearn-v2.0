import {React,useState,useEffect} from 'react';
import { Table,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import Nav from './nav';
import supabase from './supabaseClient';
import Lb from './lb.png'
const LeaderBoard=()=> {
    const [fetchError,setFetchError]=useState(null)
    const [student,setStudent]=useState(null)
  var i=1;

    useEffect(()=>{
        const fetchstudents = async () =>     {
            const {data,error} =await supabase
            .from('students')
            .select()
            .order('total',  {ascending: false} );
    
            if(error){
                setFetchError(error)
                console.log(error)
            }
            if(data){
                    setStudent(data)
                    setFetchError(null)
            
                }
            }
        
        fetchstudents()
    },[])
    return (<>
    <Nav/>
    <div>
    <Breadcrumb id="nb" tag="nav">
        <BreadcrumbItem tag="a" href="/">Noticeboard</BreadcrumbItem >
        <BreadcrumbItem tag="a" href="/test" >Test</BreadcrumbItem>
        <BreadcrumbItem active>Leaderboard</BreadcrumbItem >
</Breadcrumb>
    </div>
    
    <div align="center">
      <img src={Lb} alt="leaderboard png" width="100" height="90"/><br/></div>
      <Table style={{color:'white'}}>
        <thead>
         
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            
          </tr>
        </thead>
{fetchError && (<p>{fetchError}</p>)}
{student && (
    <tbody>
        {student.map(student=>(
           
            <tr>
            <th scope="row">{i === student.length?null:<p>{i++}</p>}</th>
            <td>{student.name}</td>
            <td>{student.total}</td>
            
          </tr>
        ))}
    
  </tbody>
)}
        
      </Table>
      
      </>
    );
  }

  export default LeaderBoard;
