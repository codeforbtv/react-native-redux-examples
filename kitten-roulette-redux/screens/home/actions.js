import {CUDDLE, SCRATCH} from "../../constants/action-types";


const oddsOfSuccess = 0.25;
const tryCuddle = () => (Math.random() >= oddsOfSuccess);

export function attemptToCuddle() {
    const success = tryCuddle();
    if (success) {
        // Purr
        return ({
            type: CUDDLE
        })
    } else {
        // Scratch
        return ({
            type: SCRATCH
        })

    }
}