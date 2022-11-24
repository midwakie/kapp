import regexPattern from '../utils/regexPattern';

const AuthRules: any = {
  username: {
    required: 'Username required',
    minLength: {
      value: 3,
      message: 'Username should be between 3 and 24 characters',
    },
    maxLength: {
      value: 24,
      message: 'Username should be between 3 and 24 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Username should contains only letters, numbers, spaces and dashes',
    },
  },
  password: {
    required: 'Password required',
    minLength: {
      value: 8,
      message: 'Password should be more than 8 characters',
    },
    pattern: {
      value: regexPattern.PASSWORD,
      message:
        'Password must have an uppercase letter, a lowercase letter, and a number.',
    },
  },

  email: {
    required: 'Email address is required',
    pattern: {
      value: regexPattern.Email,
      message: 'Invalid Email',
    },
  },
  verification: {
    required: 'verification Code required',
    pattern: {
      value: regexPattern.Numbers,
      message: 'Invalid Number',
    },
    minLength: {
      value: 6,
      message: 'Verification code must contain 6 digits',
    },
    maxLength: {
      value: 6,
      message: 'Verification code must contain 6 digits',
    },
  },

  resetCode: {
    required: 'Reset Code required',
    pattern: {
      value: regexPattern.Numbers,
      message: 'Invalid Reset Code',
    },
    minLength: {
      value: 6,
      message: 'Reset code must contain 6 digits',
    },
    maxLength: {
      value: 6,
      message: 'Reset code must contain 6 digits',
    },
  },
};

export default AuthRules;
