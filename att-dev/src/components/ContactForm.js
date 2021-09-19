import React, { useState } from "react"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state,setState] = useState({})
  
  const [loading, setLoading] = useState(false)
 
  
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(loading)
    const form = e.target
    fetch('/thanks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
  }
 
  return (
    <>
    
        <form
          name="contact"
          method="POST"
          action="/thanks/"          
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="cf"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
            <p hidden> 
            <label>
            <input  type="hidden" name="bot-field" onChange={handleChange} />
       </label>
        </p>
            
          <h3>Got a question?</h3>
             <h4>Please allow 48 hours for a response</h4>
            
          <p>    
              <label>Your Name:  <br />
                <input type="text" name="name" onChange={handleChange} required />  </label>
          </p>
           
          <p>
              <label>Your Email: <br />
                <input type="email" name="email" onChange={handleChange} required />
             </label>
           
          </p>
         
          <p>
              <label>Your Message:  <br /> 
                <textarea 
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  size="lg"
                  required
                />
            </label>
            </p>
         
         
         
            <button type="submit" disabled={loading}>
              Submit
            </button>
                
        </form>
    </>
  )
}