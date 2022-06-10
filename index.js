import { Markup, Telegraf } from "telegraf";
import {} from "dotenv/config";
import { commands } from "./const.js";
import { runGetFuelMapOkko } from "./toolsForOkko/fuelMapOkko.js";
import { runGetFuelMapWog } from "./toolsForWog/fuelMapWog.js";
import { sortFuelOkko } from "./toolsForOkko/sortFuelOkko.js";
import { sortFuelWog } from "./toolsForWog/sortFuelWog.js";
import { filterTownOkko } from "./toolsForOkko/filterTownOkko.js";
import { filterTownWog } from "./toolsForWog/filterTownWog.js";

setInterval(async () => {
  try {
    await runGetFuelMapOkko();
    await runGetFuelMapWog();
  } catch (e) {
    console.error(e);
  }
}, 1000 * 60 * 30);

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `Привет ${
      ctx.message.from.last_name
        ? ctx.message.from.last_name
        : "Владелец пепелаца"
    }`
  );
  ctx.reply(commands);
});
bot.help((ctx) => ctx.reply(commands));

bot.command("company", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Оберіть мережу АЗК:</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("OKKO", "btn_azk_1"),
          Markup.button.callback("WOG", "btn_azk_2"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});

/* bot.command("region", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      "<b>Область</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Запорізька", "btn_1"),
          Markup.button.callback("Київська", "btn_2"),
          Markup.button.callback("Дніпровская", "btn_3"),
          Markup.button.callback("Полтавська", "btn_4"),
        ],
        [
          Markup.button.callback("Львівська", "btn_5"),
          Markup.button.callback("Рівненська", "btn_6"),
          Markup.button.callback("Житомирська", "btn_7"),
          Markup.button.callback("Чернігівська", "btn_8"),
        ],
        [
          Markup.button.callback("Чернівецька", "btn_9"),
          Markup.button.callback("Одеська", "btn_10"),
          Markup.button.callback("Хмельницька", "btn_11"),
          Markup.button.callback("Миколаївська", "btn_12"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}); */
bot.action("btn_azk_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      "<b>Оберіть обласний центр:</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Запорізька", "btn_okko_1"),
          Markup.button.callback("Київська", "btn_okko_2"),
          Markup.button.callback("Дніпровская", "btn_okko_3"),
          Markup.button.callback("Полтавська", "btn_okko_4"),
        ],
        [
          Markup.button.callback("Львівська", "btn_okko_5"),
          Markup.button.callback("Рівненська", "btn_okko_6"),
          Markup.button.callback("Житомирська", "btn_okko_7"),
          Markup.button.callback("Чернігівська", "btn_okko_8"),
        ],
        [
          Markup.button.callback("Чернівецька", "btn_okko_9"),
          Markup.button.callback("Одеська", "btn_okko_10"),
          Markup.button.callback("Хмельницька", "btn_okko_11"),
          Markup.button.callback("Миколаївська", "btn_okko_12"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_azk_2", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      "<b>Оберіть обласний центр:</b>",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Запорізька", "btn_wog_1"),
          Markup.button.callback("Київська", "btn_wog_2"),
          Markup.button.callback("Дніпровская", "btn_wog_3"),
          Markup.button.callback("Полтавська", "btn_wog_4"),
        ],
        [
          Markup.button.callback("Львівська", "btn_wog_5"),
          Markup.button.callback("Рівненська", "btn_wog_6"),
          Markup.button.callback("Житомирська", "btn_wog_7"),
          Markup.button.callback("Чернігівська", "btn_wog_8"),
        ],
        [
          Markup.button.callback("Чернівецька", "btn_wog_9"),
          Markup.button.callback("Одеська", "btn_wog_10"),
          Markup.button.callback("Хмельницька", "btn_wog_11"),
          Markup.button.callback("Миколаївська", "btn_wog_12"),
        ],
      ])
    );
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Запоріжжя", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_2", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Київ", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_3", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Дніпро", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_4", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Полтава", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_5", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Львів", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_6", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Рівне", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_7", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Житомир", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_8", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Чернігів", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_9", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Чернівці", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_10", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Одеса", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_11", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Хмельницький", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_wog_12", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let arr = filterTownWog("Миколаїв", ctx);
    sortFuelWog(arr, ctx);
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Запоріжжя", ctx);
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_2", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Київ");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_3", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Дніпро");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_4", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Полтава");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_5", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Львів");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_6", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Рівне");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_7", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Житомир");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_8", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Чернігів");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_9", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Чернівці");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_10", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Одеса");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_11", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Хмельницький");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.action("btn_okko_12", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    let fuel_type = [];
    let arr = filterTownOkko("Миколаїв");
    sortFuelOkko(arr, fuel_type, ctx);
    fuel_type.length === 0
      ? ctx.replyWithHTML("Паливо відсутнє в цьому місці!")
      : "";
  } catch (e) {
    console.error(e);
  }
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
