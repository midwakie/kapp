import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

async function checkIfFirstLaunch() {
  try {
    const hasFirstLaunched = await AsyncStorage.getItem(
      '@kutubi_user_on_boarded_status',
    );
    if (hasFirstLaunched === null) {
      AsyncStorage.setItem(
        '@kutubi_user_on_boarded_status',
        'kutubi_user_on_boarded',
      );
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const useGetOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

  React.useEffect(() => {
    getIfFirstLaunch();
  }, []);

  const getIfFirstLaunch = async () => {
    const firstLaunch = await checkIfFirstLaunch();
    setIsFirstLaunch(firstLaunch);
    setIsFirstLaunchIsLoading(false);
  };

  return {
    isFirstLaunch: isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  };
};

export default useGetOnboardingStatus;
