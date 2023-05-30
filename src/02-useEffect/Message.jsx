import { useEffect } from "react";

export const Message = () => {

    const onMouseMove = ({ x, y }) => {
      const coords = {x, y};

      console.log(coords);
    }

    useEffect(() => {
      window.addEventListener('mouseover', onMouseMove);
    
      return () => {
        window.removeEventListener('mouseover', onMouseMove);

      }
    }, [])
    
    
  return (
    <>
      <div className="alert alert-danger" role="alert">
        Usuario ya existe!
      </div>
    </>
  );
};
