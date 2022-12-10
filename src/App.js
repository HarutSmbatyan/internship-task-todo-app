import React, {useRef, useState, useEffect } from 'react';
import './App.css';
import { data } from './data';
import Modal from './Delete/Modal';
import Form from './Form/Form';
import List from './List/List.js';

function App() {
  const appRef = useRef();
  const modalRef =  useRef();
  const chekRef = useRef();
  const initialQuizData = data;
  const quizQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || initialQuizData;
  const [list, setList] = useState(quizQuestions);
  const [showModal, setShowModal] = useState(false)

  const handleFormSubmit = (newVal) => {
    setList([{
      id: Math.random(),
      text: newVal,
      isCompleted: false
    }, ...list])

  }
  const handleSubmit = () => {
    setShowModal(false)
    setList(list.filter((list) => !list.isCompleted));
    chekRef.current.checked = !chekRef.current.checked; 
    appRef.current.style.backgroundColor = "";
  }
  const handleClose = () => {
    setShowModal(false);
    chekRef.current.checked = !chekRef.current.checked; 
    appRef.current.style.backgroundColor = "";
  }
  const openDialog = () => {
    appRef.current.style.backgroundColor = "rgb(240,240,240)";
    setShowModal(!showModal);
  }

  useEffect(() => {
    localStorage.setItem("quizQuestions", JSON.stringify(list))
  }, [list]);

useEffect(() => {
  const listener = (event) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      setShowModal(false);
      appRef.current.style.backgroundColor = "";
      chekRef.current.checked = !chekRef.current.checked;
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

}, [modalRef, showModal]);
  return (
    <div className="App" ref={appRef}>
      <Form onAdd={handleFormSubmit}/>
      <List
        list={list}
        onDelete={(elem)=>{
          setList(list.filter((el) => el.id !== elem.id))
        }}
        onChange={(newList) => {
          setList(list.map((el)=>{
            if(el.id === newList.id){
              return newList;
            }
            return el;
          }));
        }}
      />
      <div className="completed">
        <label id="delete" >
          <input type="checkbox" onClick={openDialog}
          ref={chekRef}/>
          <span>Hide completed</span>
        </label>
      </div>
      {showModal && 
        <Modal 
            modalRef={modalRef}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            openDialog={openDialog}
        />
      }
    </div>
  );
}

export default App;