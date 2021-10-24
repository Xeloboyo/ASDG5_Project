import {getSessionCookie, setSessionCookie} from "../Cookies"


const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            state.gloablid = state.gloablid+1;
            action.payload.id = state.gloablid;
            action.payload.user = state.session.name;
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'UPDATE_POST':
            if(state.posts.length == 0){
                return state;
            }
            return {
                ...state,
                posts: state.posts.filter(post => !!(post)).map(post => {
                    if(!post || post.id != action.payload.id){
                        return {
                            ...post
                        };
                    }
                    let p1 = {
                        ...post
                    };
                    p1.accepted = action.payload.accepted;
                    return p1;
                })
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'USER_SESSION_LOGIN':
            state.session.name = action.payload.name;
            state.session.type = action.payload.type;
            setSessionCookie(state.session);
            return {
                ...state,
                session: state.session
            };
        case 'USER_SESSION_LOGOUT':
            setSessionCookie({});
            return {
                ...state,
                session: {}
            };
        default:
            return state;
    }
};

export default Reducer;