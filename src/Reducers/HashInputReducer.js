const initialState = {
    hash_type: '',
    hash_value: ''
}

export const updateHash = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT":
            return { ...state, hash_type: action.payload["type"], hash_value: action.payload["hash_value"] }
        default:
            return initialState;
    }
}
