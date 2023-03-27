export type AuthenticationForm =
  | { name: 'SIGN_IN'; displayToggleText: 'Sign Up' }
  | { name: 'SIGN_UP'; displayToggleText: 'Sign In' };

export const SIGN_IN: AuthenticationForm = {
  name: 'SIGN_IN',
  displayToggleText: 'Sign Up',
};
export const SIGN_OUT: AuthenticationForm = {
  name: 'SIGN_UP',
  displayToggleText: 'Sign In',
};

export type ContentType =
  | 'CLUSTER_CONTENT'
  | 'BROKERS_CONTENT'
  | 'CONSUMER_GROUPS';
