import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {    
  const [formState, setFormState] = useState({
    username: "raionking82",
    email: "ruiz.edenilson@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {

    const { name, value } = target;

    setFormState({
        ...formState,
        [name]: value
    });
  }

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);
  
  useEffect(() => {
    // console.log('formState called!');
  }, [formState]);

  useEffect(() => {
    // console.log('email called!');
  }, [email]);  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input 
            type="text" 
            className="form-control" 
            name="username" 
            value={username} 
            onChange={onInputChange}
        />
      </div>
      {
        username === 'raionking82' && <Message/>         
      }
            
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          value={email}
          onChange={onInputChange}
        />
      </div>
           
    </>
  );
};
