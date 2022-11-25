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
  address_number: {
    required: false,
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Address should contains only letters, numbers, spaces and dashes',
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
  address_refinement: {
    required: false,
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Address 2 should contains only letters, numbers, spaces and dashes',
    },
  },

  address_city: {
    required: 'City required',
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message: 'City should contains only letters, numbers, spaces and dashes',
    },
  },
  address_region: {
    required: 'Region required',
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Region should contains only letters, numbers, spaces and dashes',
    },
  },
  address_postal_code: {
    required: 'Postal code required',
    pattern: {
      value: regexPattern.LettersAndSpacesAndDashesAndNumbers,
      message:
        'Postal Code should contains only letters, numbers, spaces and dashes',
    },
  },
  address_iso_country_name: {
    required: 'Country required',
    pattern: {
      value: regexPattern.LettersAndSpaces,
      message: 'Country should contains only letters',
    },
  },
  nationality: {
    required: 'Nationality required',
    pattern: {
      value: regexPattern.LettersAndSpaces,
      message: 'Country should contains only letters',
    },
  },
  selfie: {
    required: 'Selfie required',
  },
  passport: {
    required: 'Passport required',
  },
  addressDocument: {
    required: 'Address Document required',
  },
};

export default CustomerRules;
