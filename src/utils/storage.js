import nattyStorage from 'natty-storage';

const jwtStorage = nattyStorage({
    type: 'sessionStorage',
    key: 'jwtTokenKey',
    duration: 1000 * 2 //jwt token duration time
});

export { jwtStorage }