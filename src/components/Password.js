import React, {useState} from 'react'

const Password = () => {
    const [show, setShow] = useState("");
  return (
    <div>
    <input type={show ? "text" : "password"} />
    <button onClick={() => setShow(!show)}>show/hide</button>
    </div>
  )
}

export default Password;