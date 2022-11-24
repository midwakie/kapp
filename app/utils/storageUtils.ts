import AsyncStorage from '@react-native-community/async-storage';

export const persistSelectedLanguage = (value: string) => {
  return new Promise(async function (resolve, reject) {
    try {
      await AsyncStorage.setItem('@KutubiSelectedLanguage', value);
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};

export const retrieveSelectedLanguage = () => {
  return new Promise(async function (resolve, reject) {
    try {
      console.log('Reached Storage');
      const value = await AsyncStorage.getItem('@KutubiSelectedLanguage');
      if (value !== null) {
        resolve(value);
      } else {
        resolve('');
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const persistTiming = () => {
  const now = Date.now();

  return new Promise(async function (resolve, reject) {
    try {
      var d = new Date(now); // Parameter should be long value
      console.log('Inactive Saving Time  : ', d.toLocaleString());
      await AsyncStorage.setItem('@KutubiInactive', JSON.stringify(now));
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};

export const retrieveTiming = () => {
  return new Promise(async function (resolve, reject) {
    try {
      const value = await AsyncStorage.getItem('@KutubiInactive');
      if (value !== null) {
        resolve(JSON.parse(value));
      } else {
        resolve('');
      }
    } catch (error) {
      reject(error);
    }
  });
};
