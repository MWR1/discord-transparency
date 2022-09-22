/**
 *  May only allow the keys in @type {GenericObject}.
 */
type KeysIn<GenericObject> = { -readonly [key in keyof GenericObject]?: GenericObject[key] };
export default KeysIn;
