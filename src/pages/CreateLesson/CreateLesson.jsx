import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz({ createLesson }) {

  const [formData, setFormData] = useState({ name: '', text: '' })
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  function handleChange(e) {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    return createLesson(formData)
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])
  console.log(validForm)
  return (
    <div>
      <h1>Create A Lesson Here</h1>
      <form ref={formElement} onSubmit={handleSubmit}>
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
      
        <p>Reference Module ID</p>
        <input
          required
          type="text"
          name='id'
          onChange={handleChange}
          value={formData.id}
          id='id'
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
        <button disabled={false} type="submit">Create Lesson</button>
      </form>
    </div>
  );
}

export default CreateQuiz;