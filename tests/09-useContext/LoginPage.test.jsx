import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en LoginPage', () => { 
    

    test('debe de mostrar el componente sin el usuario', () => {

         render(<UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');        

        expect(preTag.innerHTML).toBe("null"); 
    
    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => { 

        const user = {
            id: 1234,
            name: 'Edenilson Ruiz',
            email: 'ruiz.edenilson@gmail.com'
          }           

        const setUserMock = jest.fn();
       
        render(<UserContext.Provider value={{user, setUser: setUserMock}}>
            <LoginPage/>
        </UserContext.Provider>);

        const buttonLogin = screen.getByRole('button');
 
        fireEvent.click(buttonLogin);

        expect(setUserMock).toHaveBeenCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledWith(user);
        
    });

});