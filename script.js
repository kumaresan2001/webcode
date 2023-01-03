const container = document.getElementById('pokemon_container');
const number = 100;
const colors = {

	fire: 'pink',
	grass: 'pink',
	electric: 'pink',
	water: 'pink',
	ground: 'pink',
	rock: 'pink',
	fairy: 'pink',
	poison: 'pink',
	bug: 'pink',
	dragon: 'pink',
	psychic: 'pink',
	flying: 'pink',
	fighting: 'pink',
	normal: 'pink'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <=number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {

	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
    <h3 class="name">${name}</h3>
          
        <div class="info">
            <span class="number">id:${pokemon.id}</span>
             <div >weight:${pokemon.weight}</div>               
             <small class="type">Type: <span>${type}</span></small>
         </div>
    
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	container.appendChild(pokemonEl);
}

fetchPokemons();









