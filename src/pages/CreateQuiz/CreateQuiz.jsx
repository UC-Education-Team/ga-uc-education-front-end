import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz(props) {

  const [formData, setFormData] = useState({ name: '' })
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])
  console.log(validForm)
  return (
    <div>
      <h1>This is a quiz</h1>
      <form ref={formElement} onSubmit={(e) => e.preventDefault()}>
        {/* Lesson Name*/}
        <p>Question 1</p>
        <textarea
          required
          name="question1"
          id="question1"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question1}</textarea>

        <p>Question 2</p>
        <textarea
          required
          name="question2"
          id="question2"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question2}</textarea>
        <p>Question 3</p>
        <textarea
          required
          name="question3"
          id="question3"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question3}</textarea>
        <p>Question 4</p>
        <textarea
          required
          name="question4"
          id="question4"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question4}</textarea>
        <p>Question 5</p>
        <textarea
          required
          name="question5"
          id="question5"
          cols="40"
          rows="3"
          onChange={handleChange}
        >{formData.question5}</textarea>
        <button disabled={!validForm} type="submit">Create Lesson</button>
      </form>
    </div>
  );
}

export default CreateQuiz;