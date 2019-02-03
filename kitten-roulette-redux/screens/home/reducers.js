import * as types from '../../constants/action-types';
import initialState from '../../reducers/initial-state';

export function reducers(state = initialState.home, action) {
    switch (action.type) {
        case types.SCRATCH:
            return {
                ...state,
                scratches: state.scratches + 1
            };
        case types.CUDDLE:
            return {
                ...state,
                cuddles: state.cuddles + 1
            };

        default:
            return state;
    }
}