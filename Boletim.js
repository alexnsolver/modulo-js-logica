

const media = [8.5, 6, 5, 9.2, 4, 8]
const nomes = ["Gabi", "Gabriela", "Gabriel", "Gabi", "Gab", "Gaby"]

console.log("Aluno: " + nomes[3] + " Media: "+ media[3])

for (let i = 0; i < media.length; i++) {
    if (media[i] >= 7) {
        console.log(nomes[i] + " Aprovado")

    } else {
        console.log(nomes[i] + " Reprovado") }
}
