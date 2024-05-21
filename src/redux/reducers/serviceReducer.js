const serviceReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SERVICES':
            return action.data;
        case 'ADD_SERVICE':
            return [...state, action.data];
        default:
            return state;
    }
};

export const setServices = (services) => {
    return {
        type: 'SET_SERVICES',
        data: services,
    };
};

export const addService = (service) => {
    return {
        type: 'ADD_SERVICE',
        data: service,
    };
};

export default serviceReducer;
