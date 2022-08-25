const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_FORM':
			return { ...state, formIsActive: !state.formIsActive };
		default:
			return state;
	}
};

export default reducer;
