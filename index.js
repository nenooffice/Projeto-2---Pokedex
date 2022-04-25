import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const pokedex = [

  {	
    id: 1,
    nome: "Bulbasaur",
    tipo: "Grass e Poison",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger." ,
    altura: 0.7,
    peso: 6.9,
    categoria: "Seed",
    habilidade: "Overgrow",
    evolucao: [
      {
        id: 2,
        nome: "Ivysaur",
        tipo: "Grass e Poison",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        descricao:"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        altura: 1.0,
        peso: 13.0,
        categoria: "Seed",
        habilidade: "Overgrow",
      },
      {
        id: 3,
        nome: "Venusaur",
        tipo: "Grass e Poison",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        descricao:"There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
        altura: 2.0,
        peso: 100.0,
        categoria: "Seed",
        habilidade: "Overgrow",
      }],
  },

  {
    id: 4,
    nome: "Charmander",
    tipo: "Fire",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lizard",
    habilidade: "Blaze",
    evolucao: [
      {
        id: 5,
        nome: "Charmeleon",
        tipo: "Fire",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        descricao: "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
        altura: 1.1,
        peso: 19.0,
        categoria: "Lizard",
        habilidade: "Blaze",
      },
      {
        id: 6,
        nome: "Charizard",
        tipo: "Fire",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        descricao: "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
        altura: 1.7,
        peso: 90.5,
        categoria: "Lizard",
        habilidade: "Blaze",
      }],
  },

  {
    id: 7,
    nome: "Squirtle",
    tipo: "Water",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao: "It shelters itself in its shell then strikes back with spouts of water at every opportunity.",
    altura: 0.5,
    peso: 9.0,
    categoria: "Tiny Turtle",
    habilidade: "Torrent",
    evolucao: [
      {
        id: 8,
        nome: "Wartortle",
        tipo: "Water",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        descricao: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as it ages.",
        altura: 1.0,
        peso: 22.5,
        categoria: "Tiny Turtle",
        habilidade: "Torrent",
      },
      {
        id: 9,
        nome: "Blastoise",
        tipo: "Water",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        descricao: "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
        altura: 1.6,
        peso: 85.5,
        categoria: "Tiny Turtle",
        habilidade: "Torrent",
      }],
  },
   
]




//Rotas

app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));