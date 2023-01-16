import {useState} from 'react'
import { useEffect } from 'react'
import './App.css'
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
      setPrevnswer( prev =>  answer)
    }
    question !== '' && getAnswer()
    setQuestion('');
    
  },[question]);





  

  return (
    

    <div className='App'>
      <br />
      <div className='prvbox'>
        
        <p className='prv'><span className='prvspan'>prev answer :</span> <br /> {prevAnswer}</p>
      </div><br />
      <div className='ansbox'>
        <p className='ans'>{answer}</p>
      </div>
      <div className='formu'>
        <form onSubmit={handleSubmit} className="formbox">
          <input type="text" name = "question" className='question' />
          <input type="submit" value = "ask ! "  className='ask'/>
        </form>
      </div>
    
    </div>
  );
}

export default App;