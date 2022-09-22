/**
 * Represents an object to be passed by reference when updating levels
 * like the brightness or blur levels, so the changes can reflect throughout the script.
 */
export default interface IPreferencesStore {
  backgroundImageURL: string;
  brightness: number;
  blur: number;
  isDarkTheme: boolean;
}
