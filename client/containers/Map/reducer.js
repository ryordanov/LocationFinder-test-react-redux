import actionTypes from './actionTypes';

const initialState = {
    actionStatus: 'none',
    city: 'Shumen'
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
                return {
                    ...state,
                    data: action.result,
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
