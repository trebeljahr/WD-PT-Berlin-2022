import axios from "axios";

class GenericApiWrapper {
  constructor({ baseURL, endpoint }) {
    this.endpoint = endpoint;
    this.api = axios.create({ baseURL });
  }

  async getAll() {
    const { data } = await this.api.get(this.endpoint);
    return data;
  }

  async getSingleById(id) {
    const { data } = await this.api.get(this.endpoint + id);
    return data;
  }

  async create(newData) {
    const { data } = await this.api.post(this.endpoint, newData);
    return {
      message: "Successfully created element with id: " + data.id,
      id: data.id,
    };
  }

  async delete(id) {
    // ?idToDelete=iadfadslkfajlfköasj
    const { data } = await this.api.delete(this.endpoint + id);
    console.log(data);
  }

  async update(id, characterInfo) {
    const { data } = await this.api.put(this.endpoint + id, characterInfo);
    console.log(data);
  }
}

const charactersApi = new GenericApiWrapper({
  baseURL: "https://ih-crud-api.herokuapp.com/",
  endpoint: "/characters/",
});

const characters = await charactersApi.getAll();
console.log(characters);

const { message } = await charactersApi.create({
  name: "Harry Potter",
  weapon: "magic!",
  occupation: "wizard",
});
console.log(message);

await charactersApi.update(2, { name: "Hermione Granger" });

const citiesApi = new GenericApiWrapper({
  baseURL: "http://localhost:8000/",
  endpoint: "/cities/",
});

console.log(await citiesApi.getAll());

await citiesApi.create({ name: "Moscow" });
