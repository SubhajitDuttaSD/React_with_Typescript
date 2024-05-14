### tuple - ??

### let role: [number, string];

### type Person = {

### name: string;

### age?: number;

### };

### let person: Person = { name: "hello" };

### let lotsOfPeople: Person[];

### for both type

### let age: number | string;

### let newFunction: Function;

### when funcion returns undefined

### type functionType = (name: string) => void;

### when function doesn't return anything

### type functionType = (name: string) => never;

### function printName(name: string) {

### console.log(name);

### }

### printName("Hellooooo");

### any type

### let name: any.

### unknown - when you don't know the type

### let personName: unknown;

### interface Person {

### name: string;

### age?: number;

### }

### interface Employee extends Person {

### company: string;

### }

### type X = {

### a: string;

### b: number;

### };

### this will contain x & y property

### type Y = X & {

### c: string;

### d: number;

### };

### let y: Y = {

### c: "reew",

### d: 32,

### };
