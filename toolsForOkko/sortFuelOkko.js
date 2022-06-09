export function sortFuelOkko(arr, fuel_type, ctx) {
  arr.forEach((obj) => {
    obj.attributes.fuel_type.forEach((obj) => {
      fuel_type.push(obj.attributes.name);
    });
    if (fuel_type.length !== 0) {
      ctx.replyWithHTML(
        `<b>Місто</b>: ${obj.attributes.Naselenyy_punkt}\n<b>Адреса</b>: ${obj.attributes.Adresa}\n<b>Топливо:</b><b>${fuel_type}</b>\n\n <a href="https://www.google.com.ua/maps/place/${obj.attributes.coordinates.lat},${obj.attributes.coordinates.lng}">Подивитися на мапі</a>`
      );
      fuel_type = [];
    } else return;
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
