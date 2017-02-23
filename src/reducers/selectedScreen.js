/**
 * A REDUCER handling selectedStore in the store, changed when:
 *			different screen is selected
 *			new screen is added
 */

const selectedScreen = (state = "", action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			if (action.componentType === "Form") return action.Uuid;
			else return state;
		case 'SELECT_SCREEN':
			return action.id
		case 'DELETE_COMPONENT':
			if (state == action.id && action.deleteScreen) return "0";
			else return state;
		default:
			return state
	}
}
export default selectedScreen