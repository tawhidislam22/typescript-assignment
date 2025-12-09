# First Question
# What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type—দুটিই অবজেক্টের গঠন বা স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের ব্যবহারে ও নমনীয়তায় কিছু পার্থক্য রয়েছে।
Interface মূলত অবজেক্টের আকৃতি বা কাঠামো নির্ধারণে ব্যবহৃত হয় এবং সহজেই extend করা যায়।
অন্যদিকে type আরও বহুমুখী, কারণ এটি unions, intersections এবং আরও জটিল টাইপ ডেফিনিশন তৈরি করতে পারে।

# Type in TypeScript

TypeScript-এর টাইপ সিস্টেম ভাষাটিতে ব্যবহৃত বিভিন্ন ডেটাটাইপ ব্যাখ্যা করে।
এটি মূলত তিন ভাগে বিভক্ত:

Any Type

Built-In Type

User-Defined Type

টাইপ সিস্টেম নিশ্চিত করে যে প্রোগ্রামে ডেটা ব্যবহারের আগে সেটি সঠিক টাইপের কিনা।

# Example

এখানে আমরা দুটি TypeScript টাইপ (PersonInfo এবং MorePersonInfo) তৈরি করেছি এবং intersection & ব্যবহার করে একত্র করেছি।
person ভেরিয়েবলটি দুই টাইপের সব প্রোপার্টি ধারণ করে এবং কনসোলে প্রদর্শন করছে।

type PersonInfo = {
  name: string;
  age: number;
};

type MorePersonInfo = {
  email: string;
};

type Person = PersonInfo & MorePersonInfo;

const person: Person = {
  name: "kgowda",
  age: 20,
  email: "kgowda@gmail.com"
};

console.log(person);

# Output
{"name": "kgowda","age": 20,"email": "kgowda@gmail.com"}

# Function using type
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

# Define Array using type
type Foods = string[];

# Interface in TypeScript

Interface মূলত একটি syntactical contract—অর্থাৎ যার নিয়ম মেনে চলতে হবে।
Interface-এর মধ্যে শুধু property, method এবং event-এর ঘোষণা থাকে, এর ভেতরে কোনো বাস্তবায়ন (implementation) থাকে না।
কোনো ক্লাস interface implement করলে তাকে অবশ্যই interface-এর সব নিয়ম অনুযায়ী চলতে হবে।

# Example

এখানে interface inheritance দেখানো হয়েছে।
IPersonInfo interface, IPerson কে extend করেছে। ফলে person অবজেক্টটি name, age, email—সব প্রোপার্টি ব্যবহার করতে পারছে।

interface IPerson {
  name: string;
  age: number;
}

interface IPersonInfo extends IPerson {
  email: string;
}

const person: IPersonInfo = {
  name: "kgowda",
  age: 20,
  email: "kgowda@gmail.com"
};

console.log(person);

# Output
name: "kgowda", age: 20, email: "kgowda@gmail.com"

# Function using Interface 
interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

# Array using Interface 
interface IFriends {
  [index: number]: string;
}

# Conclusion

TypeScript-এ type এবং interface—দুটিই আলাদা বৈশিষ্ট্য এবং সুবিধা প্রদান করে। একটিকে দিয়ে আরেকটিকে পুরোপুরি প্রতিস্থাপন করা যায় না।
প্রজেক্টের প্রয়োজন অনুযায়ী ডেভেলপাররা ঠিক করে কোনটি ব্যবহার করা ভালো হবে।

সাধারণভাবে বলা যায়:

type ব্যবহার করে function, array, primitive, union, tuple—সবই সহজে ও পরিষ্কারভাবে নির্ধারণ করা যায়।

interface মূলত অবজেক্টের কাঠামো নির্ধারণে কিছু বিশেষ সুবিধা দেয় এবং class-এ implement/extend করার ক্ষেত্রে বেশি কার্যকর।

উভয়ই TypeScript ডেভেলপমেন্টে গুরুত্বপূর্ণ ও মূল্যবান টুল।


# Second Question

# What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript-এ keyof একটি খুব গুরুত্বপূর্ণ অপারেটর, যা কোনো অবজেক্ট টাইপের সব কী-এর ইউনিয়ন টাইপ রিটার্ন করে।
সহজভাবে বলতে গেলে, keyof ব্যবহার করে কোনো অবজেক্ট বা ইন্টারফেসের property নামগুলোকে টাইপ হিসেবে পাওয়া যায়।

এটি সাধারণত ব্যবহৃত হয়:

অবজেক্টের key গুলোকে টাইপ-সেফ উপায়ে অ্যাক্সেস করতে

জেনেরিক ফাংশনে type-checking শক্তিশালী করতে

Dynamic property access কে নিরাপদ করতে

# Example

# Example 1: Basic ব্যবহার
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person;
// PersonKeys = "name" | "age" | "email"


এখানে PersonKeys টাইপ হবে:
"name" | "age" | "email"

# Example 2: টাইপ-সেফ ডায়নামিক অ্যাক্সেস
function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com"
};

console.log(getValue(person, "name"));   // Rahim
console.log(getValue(person, "email"));  // rahim@gmail.com


TypeScript এখানে নিশ্চিত করছে যে key অবশ্যই "name" | "age" | "email" এর একটি হবে।
"address" দিলে সাথে সাথে compile-time error দেবে।

# Example 3: keyof এর সাথে generic ব্যবহার (Advanced & Important)
function updateValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

const user = { name: "Karim", age: 30 };

updateValue(user, "name", "Rahim"); // Valid
updateValue(user, "age", 40);       // Valid
// updateValue(user, "email", "abc@gmail.com"); Error — "email" নেই


এখানে দেখা যাচ্ছে:

keyof T object এর key control করছে

T[K] automatically সেই key-এর value type detect করছে

এটাই TypeScript-এর সবচেয়ে powerful ফিচারগুলোর একটি।

# Example 4: keyof with Mapping Types
type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = {
  [K in keyof Person]: Person[K];
};


এখানে keyof ব্যবহার করে mapping করা হয়েছে।
এটি বড় বড় object কে manipulate করতে দারুণ কাজে লাগে।

# Example 5: keyof with Arrays
type FoodList = string[];

type FoodKeys = keyof FoodList; 
// "length" | "toString" | ... etc.


Array-ও object, তাই তার method এবং property গুলোই key হিসেবে পাওয়া যায়।

# Conclusion

keyof TypeScript-এ এমন সব ক্ষেত্রে ব্যবহার হয় যেখানে অবজেক্টের key গুলোকে টাইপ-সেফভাবে হ্যান্ডেল করতে হয়।
এটি টাইপ সিস্টেমকে আরও শক্তিশালী করে এবং runtime error কমাতে সাহায্য করে।