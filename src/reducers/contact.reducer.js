const reducer = (state, action) => {
	switch (action.type) {
		case 'BACK_TO_FORM':
			return { ...state, formState: 'form', submit: false };
		case 'TOGGLE_PHONECALL':
			return { ...state, phoneCall: !state.phoneCall };
		case 'TOGGLE_DATAPOLICY':
			return { ...state, acceptedDataPolicy: !state.acceptedDataPolicy };
		case 'TOGGLE_SUBMIT':
			return { ...state, submit: !state.submit };
		case 'HANDLE_CHANGE':
			return { ...state, [action.key]: action.value };
		case 'SHOW_SUCCESS':
			return { ...state, formState: 'success', submit: false };
		case 'SHOW_ERROR':
			return { ...state, formState: 'error', submit: false };
		default:
			return state;
	}
};

export default reducer;
