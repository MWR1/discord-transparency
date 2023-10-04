type Modify<Type, NewObjectSubtype> = Omit<Type, keyof NewObjectSubtype> & NewObjectSubtype;
export default Modify;
