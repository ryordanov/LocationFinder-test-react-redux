import actionTypes from './actionTypes';
import api from '../../utils';

export const getGeocoderAction = (params) => {
    return dispatch => {
        // dispatch({
        //     type: actionTypes.GET_GEOCODER_DATA_RQ
        // });

        return api.getGeocoderData(params)
            .then(result => dispatch({
                type: actionTypes.GET_GEOCODER_DATA,
                result
            }));
    };
};