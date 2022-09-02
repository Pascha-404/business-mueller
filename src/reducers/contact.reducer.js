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
		case 'RESET_STATE':
			return {
				formIsActive: false,
				name: '',
				email: '',
				message: '',
				phoneCall: false,
				phoneNumber: '',
				submit: false,
			};
		default:
			return state;
	}
};

export default reducer;
