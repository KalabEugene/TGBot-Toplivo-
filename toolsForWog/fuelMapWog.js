import axios from "axios";
import fs from "fs";

const url = "https://api.wog.ua/fuel_stations";

export async function runGetFuelMapWog() {
  const response = await axios.get(url);
  let data = JSON.stringify(response.data);
  fs.writeFileSync("./fuelMapWog.json", data);
}
