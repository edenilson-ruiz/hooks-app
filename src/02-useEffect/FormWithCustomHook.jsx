import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { onInputChange, onFormReset, username, password, email } = useForm({
    username: '',
    password: '',
    email: ''
  });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"          
          value={password}
          onChange={onInputChange}
        />
      </div>

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

      <button onClick={onFormReset} className="btn btn-primary mt-2">Clear</button>
    </>
  );
};
