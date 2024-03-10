import axios from "axios";

export class carsRentalAPI {
  #BASE_URL = "https://65e8b04a4bb72f0a9c50243e.mockapi.io/api/v1/";
  constructor() {
    this.searchRequest = "";
  }
  async getAllCars(page, limit, make) {
    try {
      const response = await axios(`${this.#BASE_URL}adverts`, {
        params: { make, limit, page },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getTotalAdverts(make) {
    try {
      const response = await axios(`${this.#BASE_URL}adverts`, {
        params: { make },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMakes() {
    try {
      const response = await axios(`${this.#BASE_URL}makes`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async searchCocktails(key) {
    const searchParams = new URLSearchParams({
      [key]: this.searchRequest,
    });
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails/search/?${searchParams}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  get query() {
    return this.searchRequest;
  }

  set query(newQuery) {
    this.searchRequest = newQuery;
  }
}
