import axios from "axios"

const API_URL = "https://fullstack.exercise.applifting.cz"
const API_KEY = "ef9f16c4-c94c-4605-929e-abf2efb6ab29"

export class Client {
  // getHeaders(): Headers {
  //   return new Headers({ "Content-Type": "application/json", "X-API-KEY": apiKey })
  // }

  async login(username: string, password: string) {
    const rest = await axios({
      method: "post",
      url: `${API_URL}/login`,
      headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
      data: {
        username,
        password,
      },
    })
    return rest.data
  }
}

export default new Client()
