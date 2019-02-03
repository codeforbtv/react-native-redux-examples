const oddsOfSuccess = 0.25;
const tryCuddle = () => (Math.random() >= oddsOfSuccess);

// Fake an asynchronous server call
export const attemptCuddle = () => {
    return new Promise((resolve, reject) => {
        const response = tryCuddle() ? 'cuddle' : 'scratch';
        setTimeout(() => {
            resolve(response)
        }, 1000, response);
    });
};