import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "raionking",
    password: "123456",
    email: "raionking@gmail.com",
  };
  test("deberia de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
        name: initialForm.name,
        password: initialForm.password,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onFormReset: expect.any(Function),
    })
  });

  test('debe de cambiar el nombre del formulario', () => { 
    
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;    

    act(() => {
        onInputChange({ target: { name: 'name', value: newValue}} )  ;        
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);


  });

  test('debe de realizar el reset del formulario', () => { 
    
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onFormReset } = result.current;    

    act(() => {
        onInputChange({ target: { name: 'name', value: newValue}} );
        onFormReset();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);


  });
});
