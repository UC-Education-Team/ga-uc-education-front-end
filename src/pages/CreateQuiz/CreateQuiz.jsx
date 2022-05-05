import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz({ createQuiz }) {

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
    setCorrectAnswers({ ...correctAnswers, [e.target.id]: e.target.value })
    console.log(question1Options)
    question1Options.current.childNodes.forEach(node => (
      node.name === e.target.name ? e.target.style.border = 'green solid 3px' : e.target.style.border = 'black 1px black'
    ))
    console.log(e.target.parent)
  }

  function handleSubmit(e) {
    e.preventDefault()
    return createQuiz(formData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])

  return (
    <div>
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
        <div ref={question1Options}>
          {['a', 'b', 'c', 'd'].map(ltr => (
            <>
              <p>Answer Choice {ltr.toUpperCase()}</p>
              <input
                onChange={handleChange}
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
                id="question2"
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
                id="question3"
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
                id="question4"
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
                id="question5"
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



{/* <input type="radio" id="question1" value="a" name="question1A" onChange={correctAnswer} /> Option A

<input type="radio" id="question1" value="b" name="question1B" onChange={correctAnswer} /> Option B

<input type="radio" id="question1" value="c" name="question1C" onChange={correctAnswer} /> Option C

<input type="radio" id="question1" value="d" name="question1D" onChange={correctAnswer} /> Option D */}