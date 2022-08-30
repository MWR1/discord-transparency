/**
 *  May only allow the keys in @type {GenericObject}. In our case it must only
 *  allow keys that a normal HTML element may have (e.g. "textContent" or "disabled" and so on).
 */

type KeysIn<GenericObject> = { -readonly [key in keyof GenericObject]?: GenericObject[key] };
export default KeysIn;
