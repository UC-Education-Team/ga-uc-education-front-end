import React, { useState, useEffect, useRef } from 'react';

function CreateQuiz({ createModule }) {

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
      <h1>Create A Module Here</h1>
      <form ref={formElement} onSubmit={() => console.log('submitted')}>
        {/* Module Name*/}
        <p>Name</p>
        <input
          type="text"
          name='name'
          onChange={handleChange}
          value={formData.name}
          id='name'
          required
        />
        <button disabled={!validForm} type="submit">Create Module</button>
      </form>
    </div>
  );
}

export default CreateQuiz;