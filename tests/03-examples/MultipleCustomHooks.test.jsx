import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch, useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => {     

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        expect(screen.getByText('Loading'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});

        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Edenilson', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        expect(screen.getByText('Hola Mundo'));
        expect(screen.getByText('Edenilson'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe llamar la funcion de incrementar', () => { 
    
        useFetch.mockReturnValue({
            data: [{author: 'Edenilson', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        const nextButton = screen.getByRole('button', { name: 'Next quote'});

        const {increment } = useCounter();

        fireEvent.click(nextButton);

        expect(increment).toHaveBeenCalledTimes(1);



    });

});