import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const newUser = {
    id: 1234,
    name: 'Edenilson Ruiz',
    email: 'ruiz.edenilson@gmail.com'
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <p>
        User:        
      </p>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setUser(newUser)}
      >
        Set user
      </button>
    </>
  );
};
