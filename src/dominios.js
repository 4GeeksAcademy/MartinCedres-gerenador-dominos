console.log("generador de dominios");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "raacon"];
let ext = [".com", ".uy", ".es"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
      }
    }
  }
}
