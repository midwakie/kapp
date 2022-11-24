// export action creators
import * as loginActions from './loginActions';
import * as loadingActions from './loadingActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  loadingActions,
  navigationActions,
  themeActions,
);
