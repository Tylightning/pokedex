$(function() {
  // Step 0: Set your assigned pokemon to the "pokemon" variable! I have put in Bulbasaur for an example
  var pokemon = bulbasaur;

  // STEP 1: Uncomment the next line and make sure that the pokemon object prints to the console!
   console.log(pokemon)

  // STEP 2: Use jQuery to add information to the empty fields. The first few have been done for you.
  // Note that some of these fields may not exist for your pokemon. 
  
  $(".pokemon-name").append(pokemon.name);
  $(".pokemon-evolves").append(pokemon.evolutions[0].to);
  $(".pokemon-ev-level").append(pokemon.evolutions[0].level) // Replace the ?
  // TODO: Ivysuar
  $(".pokemon-attk").append(" 45");
  $(".pokemon-defn").append("49");
   $("pokemon-spd").append(" 49");
  
  // TODO: Add ability names here to the <ul> with class .ability-name
    $(".ability-names").append("<li>overgrow</li>");
    $(".ability-names").append("<li>chlorophyll</li>");
  // TODO: Add egg group names here to a <ul> that you created
    //.egg_groups("Plant","Monster");
  // TODO: Add move names in alphabetical order here to the existing <ul>
    // moves[
    // Attract;
    // Bide;
    // Bind;
    
    // ]
  // TODO: Add ONLY level up move names to the <ul> you created

  // Now... take a deep breath and go back to your move lists.
  // TODO: Find a way to use variables to make your code more readable!

  // (extra credit) TODO:  either...
  //   1. Change up your code so that visitors can select which pokemon (squirtle, charmander, bulbasaur, etc.)
  //   they want to see, and then show that pokemon's stats and picture, or...
  //   2. Use the Pokeapi to let your users access all of the pokemon! Don't worry about the picture.

  // (extra credit) TODO: Add a list of all avaiable learn_types with no repeats!
  
  
  // You don't have to touch anything below here, but if you're curious, this code
  // automatically changes the pokedex image to match your current Pokemon.
  var getProperImageURL = function(pokemon) {
    var pokemonNumber = pokemon.pkdx_id;
    var urlNum = returnThreeDigits(pokemonNumber);
    return "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/" + urlNum + ".png";
  };
  
  var returnThreeDigits = function(num) {
    if (num < 10) {
      return "00" + num;
    } else if (num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  var tag = $("<img>").attr("src", getProperImageURL(pokemon)).attr("alt", "Oh no! Is pokemon defined?");
  $(".image-container").html(tag);
});
