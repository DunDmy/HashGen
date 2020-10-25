const initialState = {
    hash_type: '',
    hash_value: '',
    info_vis: false,
    file_info: {
        name: '',
        size: '',
        type: '',
        lastModifiedDate: ''
    }
}

export const updateFile = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD":
            return {
                ...state,
                hash_type: action.payload["type"],
                hash_value: action.payload["hash_value"],
                info_vis: true,
                file_info: {
                    name: action.payload["file_info"]["name"],
                    size: action.payload["file_info"]["size"],
                    type: action.payload["file_info"]["type"],
                    lastModifiedDate: action.payload["file_info"]["lastModifiedDate"]
                }
            }
        default:
            return initialState;
    }
}
