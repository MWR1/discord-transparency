type FilterPropertiesNotOfType<ObjectType, WantedType> = {
  [key in keyof ObjectType as ObjectType[key] extends WantedType ? key : never]: WantedType;
};

export default FilterPropertiesNotOfType;
