import {CUDDLE, SCRATCH} from "../../constants/action-types";
import {attemptCuddle} from "../../data-sources";


// Use a thunk ( a function returned from a function) to get async behavior
export function attemptToCuddle() {
    return (dispatch) => {
        attemptCuddle().then(response => {

            if (response === 'cuddle') {
                // Purr
                dispatch({
                    type: CUDDLE
                });
            }

            if (response === 'scratch') {
                // Scratch
                dispatch({
                    type: SCRATCH
                });

            }
        });
    };
}