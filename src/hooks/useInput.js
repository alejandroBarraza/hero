import { useState } from 'react';

export const useInput = (initialState) => {
    const [value, setvalue] = useState(initialState);

    const onHandleChange = ({ target }) => {
        setvalue({
            ...value,
            [target.name]: target.value,
        });
    };

    const resetForm = () => {
        setvalue(initialState);
    };
    return [value, onHandleChange, resetForm];
};
