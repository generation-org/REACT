const InitialState = {
    auth: false
};

const ENABLE_AUTH = "ENABLE_AUTH";
const DISABLE_AUTH = "DISABLE_AUTH";


const verifyLogin = (state = InitialState, action) => {
    switch (action.type) {
        case ENABLE_AUTH:
            return { ...state, auth: true };
        case DISABLE_AUTH:
            return { ...state, auth: false };
        default:
            return state;
    }
};


export default verifyLogin;