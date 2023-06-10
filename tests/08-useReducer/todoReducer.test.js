import { todoReducer } from '../../src/08-useReducer/todoReducer';


describe('Pruebas en el todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];


    test('should return the initialState', () => { 
    
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test('should add a Todo', () => { 

        const action = {
            type: 'todo_add',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    
    });

    test('should delete a Todo', () => { 
    
        const action = {
            type: 'todo_delete',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);

    });

    test('should change the value on flag done', () => { 
    
        const action = {
            type: 'todo_toggle',
            payload: 1
        }

        const newState = todoReducer(initialState, action);        
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);        
        expect(newState2[0].done).toBe(false);
    
    });


});