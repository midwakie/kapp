import regexPattern from '../utils/regexPattern';

const CustomerRules = {
  /// user details rules
  first_name: {
    required: 'First Name required',
    pattern: {
      value: regexPattern.LettersAndSpaces,
      message: 'First name should contains only letters',
    },
  },
  middle_name: {
    required: false,
    pattern: {
      value: regexPattern.LettersAndSpaces,
      message: 'Middle name should contains only letters',
    },
  },
  last_name: {
    required: 'Last Name required',
    pattern: {
      value: regexPattern.LettersAndSpaces,
      message: 'Last name should contains only letters',
    },
  },
  birthday: {
    required: 'Date of birth is required',
    pattern: {
      value: regexPattern.Date,
      message: 'Date of birth contains only numbers and dashes',
    },
  },
  phone_number: {
    required: 'Phone Number required',
    pattern: {
      value: regexPattern.Phone,
      message: 'Invalid Phone Number',
    },
  },
  address_street: {
    required: 'Address street required',
    minLength: {
      value: 3,
      message: 'Address street should be at least 3 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Address should contains only letters, numbers, spaces and dashes',
    },
  },
  school_location: {
    required: 'School location required',
    minLength: {
      value: 3,
      message: 'School location should be at least 3 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'School location should contains only letters, numbers, spaces and dashes',
    },
  },
  school_name: {
    required: 'School name required',
    minLength: {
      value: 3,
      message: 'School name should be at least 3 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'School name should contains only letters, numbers, spaces and dashes',
    },
  },
  country: {
    required: 'Country required',
    minLength: {
      value: 3,
      message: 'Country should be at least 3 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Country should contains only letters, numbers, spaces and dashes',
    },
  },
  city: {
    required: 'City required',
    minLength: {
      value: 3,
      message: 'City should be at least 3 characters',
    },
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message: 'City should contains only letters, numbers, spaces and dashes',
    },
  },
};

export default CustomerRules;
