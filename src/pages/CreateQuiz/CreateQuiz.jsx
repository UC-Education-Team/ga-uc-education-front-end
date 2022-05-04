import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz(props) {

  const [formData, setFormData] = useState({ name: '' })
  const [validForm, setValidForm] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(false)
  const formElement = useRef()
  const question1Options = useRef()
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function correctAnswer(e) {
    setCorrectAnswers({ ...correctAnswers, [e.target.id]: e.target.name })
    console.log(question1Options)
    question1Options.current.childNodes.forEach(node => (
      node.localName === 'input' ? node.style.border = '1px solid black' : console.log(node.localName)
    ))
    e.target.style.border = '4px solid green'
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])

  return (
    <div>
      <h1>This is a quiz</h1>
      <form ref={formElement} onSubmit={(e) => e.preventDefault()}>
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
        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`${ltr}`}
                id="question1"
                type="text" />
            </>
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

        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`${ltr}`}
                id="question1"
                type="text" />
            </>
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

        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`${ltr}`}
                id="question1"
                type="text" />
            </>
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

        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`${ltr}`}
                id="question1"
                type="text" />
            </>
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

        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
                onDoubleClick={correctAnswer}
                name={`${ltr}`}
                id="question1"
                type="text" />
            </>
          ))}
        </div>

        <button disabled={!validForm} type="submit">Create Lesson</button>
      </form>
    </div>
  );
}

export default CreateQuiz;