import puppeteer from "puppeteer";
import fs from "fs";

export async function runGetFuelMapOkko() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.okko.ua/api/uk/fuel-map");

  await page.content();

  let fuelMap = await page.evaluate(() => {
    return JSON.parse(document.querySelector("body").innerText);
  });
  let data = JSON.stringify(fuelMap);
  fs.writeFileSync("./fuelMapOkko.json", data);
  await browser.close();
}
