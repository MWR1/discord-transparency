/**
 * Represents an object to be passed by reference when updating the brightness level
 * through the brightness tweaker, so the changes can reflect throughout the script
 */
export default interface BrightnessLevel {
  value: number;
}
