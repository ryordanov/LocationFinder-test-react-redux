import actionTypes from './actionTypes';

const initialState = {
    actionStatus: 'none',
    city: 'Shumen',
    data: {},
    apiKey: ''
};

const mapReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        // case actionTypes.GET_GEOCODER_DATA_RQ:
        //     return {
        //         ...state,
        //         actionStatus: 'requested'
        //     };

        case actionTypes.GET_GEOCODER_DATA:
            if (action.result) {
                const data = (action.result.results && Array.isArray(action.result.results) ? action.result.results[0] : {})
                const apiKey = action.result.results.apiKey || '';
                return {
                    ...state,
                    data,
                    apiKey,
                    actionStatus: 'finished'
                };
            } else {
                return state;
            }


        default:
            return state;
    }
};

export default mapReducer;
