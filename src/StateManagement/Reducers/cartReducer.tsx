interface Actions {
    type?: string
}

export const cartReducers = (state = [], action: Actions) => {
    switch (action.type) {
        case "add_to_cart":
            return { loading: true, ...state }
        default:
            break;
    }
}
