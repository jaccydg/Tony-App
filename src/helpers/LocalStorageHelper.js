// eslint-disable-next-line import/no-cycle
import { themeModes } from '../slices/themeSlice';

const userSettingsKey = 'user-settings';

const createUserSettings = () => ({ themeMode: themeModes.light });

export const getUserSettings = () => {
    const userSettingsSerialized = localStorage.getItem(userSettingsKey);
    if (userSettingsSerialized) return JSON.parse(userSettingsSerialized);
    const newUserSettings = createUserSettings();
    localStorage.setItem(userSettingsKey, JSON.stringify(newUserSettings));
    return newUserSettings;
};

export const setUserSettingsProp = (key, value) => {
    const currentUserSettings = getUserSettings();
    currentUserSettings[key] = value;
    localStorage.setItem(userSettingsKey, JSON.stringify(currentUserSettings));
};
