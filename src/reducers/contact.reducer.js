const reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_FORM':
			return { formIsActive: !state.formIsActive, ...state };
		default:
			return state;
	}
};

export default reducer
