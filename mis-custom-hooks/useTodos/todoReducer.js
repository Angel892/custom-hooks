export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(d => d.id !== action.payload);
        case '[TODO] Update Todo':
            return initialState.map(d => {
                if (d.id === action.payload) {
                    return {
                        ...d,
                        done: !d.done,
                    }
                }
                return d;
            });
        default:
            return initialState;
    }
}