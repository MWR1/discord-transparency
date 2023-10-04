type RemoveSignatures<Type> = {
  [key in keyof Type as string extends key
    ? never
    : number extends key
    ? never
    : symbol extends key
    ? never
    : key]: Type[key];
};

export default RemoveSignatures;
