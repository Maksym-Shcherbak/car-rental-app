import axios from "axios";

export class carsRentalAPI {
  #BASE_URL = "https://65e8b04a4bb72f0a9c50243e.mockapi.io/api/v1/";
  constructor() {
    this.searchRequest = "";
  }
  async getAllCars(page = 1, limit = 12) {
    const searchParams = new URLSearchParams({
      page,
      limit,
    });
    try {
      const response = await axios(`${this.#BASE_URL}adverts?${searchParams}`);
      console.log(response);
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
