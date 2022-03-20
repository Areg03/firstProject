const ADD_TEXT = 'ADD-TEXT';
const UPDATE_NEW_TEXT_BODY = 'UPDATE-NEW-TEXT-BODY';

let initialState = {
    newText: '',
    newTextBody: '',
    texts: ['I study at the Polytechnic University',
        'I like playing chess, watch films, ...',
        'I want be a programmer and be a millionaire and ...',
    ],
    headers: ['', 'My study', 'My hobbies', 'My goals'],
}

const aboutMeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TEXT: {
            if (state.newTextBody === 'A') {
                return {
                    ...state,
                    newText: state.texts[0],
                    newTextBody: '',
                    header: state.headers[1],
                }
            } else if (state.newTextBody === 'B') {
                return {
                    ...state,
                    newText: state.texts[1],
                    newTextBody: '',
                    header: state.headers[2],
                }
            } else if (state.newTextBody === 'C') {
                return {
                    ...state,
                    newText: state.texts[2],
                    newTextBody: '',
                    header: state.headers[3],
                }
            } else {
                return {
                    ...state,
                    newText: state.newTextBody,
                    newTextBody: '',
                    header: state.headers[0],
                }
            }
        }

        case UPDATE_NEW_TEXT_BODY: {
            return {
                ...state,
                newTextBody: action.newTextD,
            };
        }

        default:
            return state;
    }
}

export const addTextAC = () => ({ type: ADD_TEXT });
export const updateNewTextBodyAC = (newTextChange) => ({ type: UPDATE_NEW_TEXT_BODY, newTextD: newTextChange });



export default aboutMeReducer;