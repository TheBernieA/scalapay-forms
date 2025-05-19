import formReducer, { goToStep, updateFormData, resetForm } from '@/store/formSlice';

describe('formSlice reducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, { type: '' })).toEqual({ step: 1, data: {} });
    });

    it('should handle goToStep', () => {
        const nextState = formReducer(undefined, goToStep(2));
        expect(nextState.step).toBe(2);
    });

    it('should handle updateFormData', () => {
        const prevState = { step: 1, data: { name: 'John' } };
        const nextState = formReducer(prevState, updateFormData({ age: 30 }));
        expect(nextState.data).toEqual({ name: 'John', age: 30 });
    });

    it('should handle resetForm', () => {
        const prevState = { step: 2, data: { foo: 'bar' } };
        const nextState = formReducer(prevState, resetForm());
        expect(nextState).toEqual({ step: 1, data: {} });
    });
});
