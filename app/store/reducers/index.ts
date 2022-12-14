/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as selectedRoleReducer from './selectedRoleReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(
  loginReducer,
  loadingReducer,
  selectedRoleReducer,
  themeReducer,
);
