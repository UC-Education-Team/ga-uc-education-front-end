import React, { useState, useEffect, useRef } from 'react';
import styles from './CreateQuiz.module.css'
function CreateQuiz({ createQuiz }) {

  const [formData, setFormData] = useState({})
  const [validForm, setValidForm] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState({})
  const formElement = useRef()
  const question1Options = useRef()
  const question2Options = useRef()
  const question3Options = useRef()
  const question4Options = useRef()
  const question5Options = useRef()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function correctAnswer(e) {
    let questionSet;
    setCorrectAnswers({ ...correctAnswers, [e.target.id]: e.target.name })
    if (e.target.className === '1') { questionSet = question1Options }
    if (e.target.className === '2') { questionSet = question2Options }
    if (e.target.className === '3') { questionSet = question3Options }
    if (e.target.className === '4') { questionSet = question4Options }
    if (e.target.className === '5') { questionSet = question5Options }
    questionSet.current.childNodes.forEach(div => {
      div.childNodes[1].style.border = 'black 1px solid'
    })
    e.target.style.border = 'green 3px solid'
  }

  function handleSubmit(e) {
    e.preventDefault()
    let q1Data, q2Data, q3Data, q4Data, q5Data;
    for (const data in formData) {
      if (data.includes('1')) q1Data ? q1Data = { ...q1Data, [data]: formData[data] } : q1Data = { [data]: formData[data] }
      if (data.includes('2')) q2Data ? q2Data = { ...q2Data, [data]: formData[data] } : q2Data = { [data]: formData[data] }
      if (data.includes('3')) q3Data ? q3Data = { ...q3Data, [data]: formData[data] } : q3Data = { [data]: formData[data] }
      if (data.includes('4')) q4Data ? q4Data = { ...q4Data, [data]: formData[data] } : q4Data = { [data]: formData[data] }
      if (data.includes('5')) q5Data ? q5Data = { ...q5Data, [data]: formData[data] } : q5Data = { [data]: formData[data] }
    }
    console.log(correctAnswers)
    let questionData = [q1Data, q2Data, q3Data, q4Data, q5Data]
    return createQuiz({ questions: questionData, answers: [correctAnswers] })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])

  return (
    <div style={{ width: '100%', margin: '30px' }}>
      <h1>This is a quiz</h1>
      <form ref={formElement} onSubmit={handleSubmit}>

        {/* Question 1 */}
        <p>Question 1</p>
        <textarea
          required
          name="question1"
          id="question1"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question1}</textarea>
        <div className={styles.question} ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <div key={ltr} style={{ textAlign: 'center' }}>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`Q1 ${ltr}`}
                id="question1"
                type="text"
                className='1'
                style={{ width: '15vw', minWidth: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <p>Question 2</p>
        <textarea
          required
          name="question2"
          id="question2"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question2}</textarea>

        <div className={styles.question} ref={question2Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <div key={ltr} style={{ textAlign: 'center' }}>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`Q2 ${ltr}`}
                id="question2"
                type="text"
                className='2'
                style={{ width: '15vw', minWidth: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* Question 3 */}
        <p>Question 3</p>
        <textarea
          required
          name="question3"
          id="question3"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question3}</textarea>

        <div className={styles.question} ref={question3Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <div key={ltr} style={{ textAlign: 'center' }}>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`Q3 ${ltr}`}
                id="question3"
                type="text"
                className='3'
                style={{ width: '15vw', minWidth: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* Question 4 */}
        <p>Question 4</p>
        <textarea
          required
          name="question4"
          id="question4"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question4}</textarea>

        <div className={styles.question} ref={question4Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <div key={ltr} style={{ textAlign: 'center' }}>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`Q4 ${ltr}`}
                id="question4"
                type="text"
                className='4'
                style={{ width: '15vw', minWidth: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* Question 5 */}
        <p>Question 5</p>
        <textarea
          required
          name="question5"
          id="question5"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question5}</textarea>

        <div className={styles.question} ref={question5Options}>
          {[' a', 'b', 'c', 'd'].map(ltr => (
            <div key={ltr} style={{ textAlign: 'center' }}>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`Q5 ${ltr}`}
                id="question5"
                type="text"
                className='5'
                style={{ width: '15vw', minWidth: '200px' }}
              />
            </div>
          ))}
        </div>

        <button disabled={false} type="submit">Create Lesson</button>
      </form>
    </div>
  );
}

export default CreateQuiz;