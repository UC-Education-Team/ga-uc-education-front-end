import React, { useState, useEffect, useRef } from 'react';

function CreateModule({ createModule }) {
  // Constants & State
  const [formData, setFormData] = useState({ name: '', number:Math.floor(Math.random() * 100), description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros turpis, vehicula vel mollis ac, tincidunt non risus. ' })
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  // Event Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function handleSubmit(e) {
    console.log('here')
    e.preventDefault()
    console.log('Create Module: ', createModule)
    return createModule(formData)
  }

  // Side Effects
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [validForm])

  //JSX
  return (
    <div>
      <h1>Create A Module Here</h1>
      <form ref={formElement} onSubmit={handleSubmit}>
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
        <button disabled={false} type="submit">Create Module</button>
      </form>
    </div>
  );
}

export default CreateModule;