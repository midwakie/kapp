/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params: any) {
  NavigationService.navigate('Home', params);
}

export function navigateToEmailVerify() {
  NavigationService.reset('Verify Email');
}

export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('ForgotPassword', params);
}
