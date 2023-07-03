import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]= useState('')
  const [deleted,setDeleted]= useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{
        return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))

            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i  onClick={()=>{
              toDos.map(obj3=>{
              if(obj3.id === obj.id){
                console.log("one");
                setDeleted([...deleted,{id: Date.now(),text: obj3.text}])
                return obj3
              }
              console.log("two")
              return null
            })
            console.log("three");
              console.log(deleted)
            
              setToDos(toDos.filter(obj4 => {
                if(obj4.id === obj.id){
                  return null
                }else{
                  return obj4
                }
              }))
            }}
             className="fas fa-times"></i>
          </div>
        </div>)
        })
      }
      { toDos .length !==0 && <div><i><h2>Active tasks</h2></i><hr /></div>}
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h2>{obj.text}</h2>)
          }
          return null
        })}
        {deleted.length !==0 && <div><hr/><i><h2>Deleted Items</h2></i><hr/></div>}
      {
        deleted.map((obj)=>{
          return (<h2>{obj.text}</h2>)
        })
      }
      </div>
    </div>
  );
}

export default App;