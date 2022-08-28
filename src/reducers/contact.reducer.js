const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_FORM':
			return { ...state, formIsActive: !state.formIsActive };
		case 'TOGGLE_PHONECALL':
			return { ...state, phoneCall: !state.phoneCall };
		case 'TOGGLE_SUBMIT':
			return { ...state, submit: !state.submit };
		case 'HANDLE_CHANGE':
			return { ...state, [action.key]: action.value };
		default:
			return state;
	}
};

export default reducer;
