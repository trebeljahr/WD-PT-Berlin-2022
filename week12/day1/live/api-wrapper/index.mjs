import axios from "axios";
import { nanoid } from "nanoid";

const baseURL = "https://ih-crud-api.herokuapp.com";

// axios.get(baseUrl + "/characters");
// axios.post(baseUrl + "/characters");
// const apiClient = axios.create({ baseURL });

// const spotifyApi = new SpotifyApi({ credentials...})
// spotifyApi.getSongs()

class CharactersApi {
  constructor() {
    this.api = axios.create({ baseURL });
  }

  async getCharacters() {
    const { data } = await this.api.get("/characters");
    return data;
  }

  async getSingleCharacter(id) {
    const { data } = await this.api.get(`/characters/${id}`);
    return data;
  }

  async getCharacterByName(nameToFind) {
    const characters = await this.getCharacters();
    const character = characters.find(({ name }) => name === nameToFind);
    if (!character) {
      throw Error("Character of this name, doesn't exist!");
    }
    return character;
  }

  async createCharacter(characterData) {
    if (!characterData.name && typeof characterData.name !== "string") {
      throw Error("Please provide a name for your character!");
    }

    if (
      !characterData.occupation &&
      typeof characterData.occupation !== "string"
    ) {
      throw Error("Please provide a name for your character!");
    }

    if (!characterData.weapon && typeof characterData.weapon !== "string") {
      throw Error("Please provide a name for your character!");
    }
    const newCharacter = {
      ...characterData,
      id: nanoid(),
    };
    console.log(newCharacter);
    const { data } = await this.api.post("/characters", newCharacter);
    return {
      message: "Successfully created element with id: " + data.id,
      id: data.id,
    };
  }

  async deleteCharacter(id) {
    const { data } = await this.api.delete(`/characters/${id}`);
    console.log(data);
  }

  async updateCharacter(id, characterInfo) {
    const { data } = await this.api.put(`/characters/${id}`, characterInfo);
    console.log(data);
  }
}

const charactersApi = new CharactersApi();
const characters = await charactersApi.getCharacters();
console.log(characters);

// const hanSolo = await charactersApi.getSingleCharacter(3);
// console.log(hanSolo);

// const lukeSkywalker = await charactersApi.getCharacterByName("Luke Skywalker");
// console.log(lukeSkywalker);

const { message, id } = await charactersApi.createCharacter({
  name: "Harry Potter",
  weapon: "magic!",
  occupation: "wizard",
});
console.log(message);

await charactersApi.updateCharacter(2, { name: "Hermione Granger" });
// await charactersApi.deleteCharacter(id);

// apiClient.get("/characters");
