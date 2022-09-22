import { IPreferencesStore } from "../../types";
export default new Map<keyof IPreferencesStore, IPreferencesStore[keyof IPreferencesStore]>();
