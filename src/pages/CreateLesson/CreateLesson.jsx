import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz(props) {

  const [formData, setFormData] = useState({ name: '', text: '' })
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  function handleChange(e) {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])
  console.log(validForm)
  return (
    <div>
      <h1>Create A Lesson Here</h1>
      <form ref={formElement} onSubmit={() => console.log('submitted')}>
        {/* Lesson Name*/}
        <p>Name</p>
        <input
          required
          type="text"
          name='name'
          onChange={handleChange}
          value={formData.name}
          id='name'
        />

        {/* Lesson Content*/}
        <p>Lesson Material</p>
        <textarea
          required
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={handleChange}
        >{formData.text}</textarea>
        <button disabled={!validForm} type="submit">Create Lesson</button>
      </form>
    </div>
  );
}

export default CreateQuiz;