import {useState} from 'react'
import { useEffect } from 'react'
function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const [prevAnswer, setPrevnswer] = useState('')



  


  const handleSubmit = (e) =>{
    e.preventDefault();
    setQuestion(e.target.elements.question.value);
    
    
  }

  useEffect(()=>{
    const getAnswer = async () => {
      let response = await fetch(`http://127.0.0.1:5000/ask?q=${question}`)
      response = await response.json()
      setAnswer(response.answers)
      setPrevnswer( prev => prev + answer)
    }
    question !== '' && getAnswer()
    setQuestion('');
    
  },[question]);





  

  return (
    

    <>
    <p>{prevAnswer}</p>
      <h1>{answer}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name = "question" />
        <input type="submit" value = "ask ! " />
      </form>
    
    </>
  );
}

export default App;