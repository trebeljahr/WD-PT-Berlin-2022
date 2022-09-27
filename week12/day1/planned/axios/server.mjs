import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-crud-api.herokuapp.com",
});

const charactersResponse = await api.get("/characters");
console.log(charactersResponse.data);

const characterWithId2Response = await api.get("/characters/2");
console.log(`Character with ID 2 is:`, characterWithId2Response.data);

class APIHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-crud-api.herokuapp.com",
    });
  }
  async getAllCharacters() {
    const { data: characters } = await this.api.get("/characters");
    console.log(characters);
    return characters;
  }

  async getOneCharacter(id) {
    const { data: singleCharacter } = await this.api.get(`/characters/${id}`);
    console.log(singleCharacter);
    return singleCharacter;
  }

  async createCharacter(characterInfo) {
    const { data } = await this.api.post(`/characters`, characterInfo);
    console.log(data);
  }

  async editCharacter(id, characterInfo) {
    const { data } = await this.api.put(`/characters/${id}`, characterInfo);
    console.log(data);
  }

  async deleteCharacter(id) {
    await this.api.delete(`/characters/${id}`);
  }
}

const apiWrapper = new APIHandler();
await apiWrapper.createCharacter({
  name: "Deadpool",
  debt: false,
  weapon: "Swords",
  occupation: "None",
});

console.log(await apiWrapper.getAllCharacters());
// for (let i = 0; i < 100000; i++) {
//   apiWrapper.createCharacter({
//     name: "Deadpool",
//     debt: false,
//     weapon: "Swords",
//     occupation: "None",
//   });
// }
