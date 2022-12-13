// export action creators
import * as loginActions from './loginActions';
import * as loadingActions from './loadingActions';
import * as selectedRoleActions from './selectedRoleActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  loadingActions,
  selectedRoleActions,
  themeActions,
);
