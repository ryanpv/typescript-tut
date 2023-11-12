// type aliases to avoid repetitive code

// can have alias for typing
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(uid, item)
};

// can also have aliases for parameter types
type objWithName = { name: string, uid: number };

const customer = (user: objWithName) => {
  console.log(user,name, user.uid)
};