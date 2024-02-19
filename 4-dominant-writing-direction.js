require('./includes/scripts.js') // include the scripts used by the chapter

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

function dominantDirection(text) {
    // Your code here.
  let langos = countBy(text, char => {
    let lango = characterScript(char.codePointAt(0));
    return lango ? lango.direction : "none";
  }).filter(({ name }) => name != "none");
  switch (langos.length) {
    case 0:
      return 'nothing to see';
    case 1:
      return langos[0].name;
    default:
      if (langos.reduce((acc, cur) => acc.count === cur.count)) {
        return 'nothing to see';
      } else {
        return langos.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl