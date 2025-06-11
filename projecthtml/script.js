const x = 10.5852;
let y = 5;
y = "hi!";
y = "djojo";
console.log(x, y);
console.log(5 > 9);
console.log(9 > 5);
let person;
let someone = null;

console.log(person, someone);

const classNames = ["tarek", "hatem", "badr"];
const presence = [1, 0.1, 0.05];
console.log(classNames[0], presence[1]);

const userInfo = {
  firstName: "mrCss",
  lastName: "sans flex",
  num: 55555555,
  presence: true,
};
const users = [
  {
    name: "tarek",
    presence: 1,
  },
  {
    name: "hatem",
    presence: 0.1,
  },
  {
    name: "badr",
    presence: 0.05,
  },
];
for (let i = 0; i < users.length; i++) {
  console.log(
    "hi! this is " +
      users[i].name +
      " " +
      users[i].name.length +
      " " +
      users[i].presence
  );
}
if (classNames[1] == "hi!") {
  console.log("yes it's hi");
} else if (classNames[1] == "hatem") {
  console.log("it's hatem");
} else {
  console.log("it's not hi neither hatem");
}

function add(x, y) {
  return x + y;
}

function test(fn, resultat) {
  if (fn == resultat) {
    console.log("test passed : " + resultat);
  } else {
    console.log("resultat attendu " + resultat + " not " + fn);
  }
}
test(add(8, 9), 17);
test(add(8, 9), 18);
