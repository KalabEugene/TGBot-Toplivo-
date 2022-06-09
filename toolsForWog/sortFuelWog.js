import axios from "axios";

export function sortFuelWog(arr, ctx) {
  arr.forEach(async (obj) => {
    const response = await axios.get(obj.link);
    const res = response.data;
    if (
      res.data.workDescription.indexOf("спецтранспорт") !== -1 ||
      res.data.workDescription.indexOf("Готівка") !== -1 ||
      res.data.workDescription.indexOf("Гаманець") !== -1 ||
      res.data.workDescription.indexOf("Талони") !== -1 ||
      res.data.workDescription.indexOf("Паливна") !== -1
    ) {
      ctx.replyWithHTML(
        `<b>Місто та Адреса</b>: ${obj.name}\n<b>Топливо:</b>\n\n<b>${res.data.workDescription}</b>\n\n <a href="https://www.google.com.ua/maps/place/${res.data.coordinates.latitude},${res.data.coordinates.longitude}">Подивитися на мапі</a>`
      );
    }
     });
}

/* zaporizhia.forEach((obj) => {
      obj.attributes.fuel_type.forEach((obj) => {
        fuel_type.push(obj.attributes.name);
      });
      ctx.replyWithHTML(
        `<b>Місто</b>: ${obj.attributes.Naselenyy_punkt}\n<b>Адреса</b>: ${
          obj.attributes.Adresa
        }\n<b>Топливо:</b><i>${
          fuel_type.length === 0 ? "Топливо отсутствует" : fuel_type
        }</i>\n\n <a href="https://www.google.com.ua/maps/place/${
          obj.attributes.coordinates.lat
        },${obj.attributes.coordinates.lng}">Подивитися на карті</a>`
      );
      fuel_type = [];
    }); */
