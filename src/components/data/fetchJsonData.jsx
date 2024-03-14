import axios from "axios";
export async function fetchData() {
  try {
    const response = await axios.get("./data.json");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
