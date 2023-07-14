import tap from "tap";
import request from "supertest";
import { app, server, stopServer } from "../index.js";
import Url from "../models/Url.js";
import { injectData, removeData } from "../data/data.js";

// To run use npx tap test/urlRoutes.test.js
tap.test("Create URL Tests", async (t) => {
  console.log("Running Create URL Tests");
  t.test("Create URL for Youtube", async (t) => {
    const response = await request(app)
      .post("/urls/createUrl")
      .send({ longUrl: "https://www.youtube.com/" });

    t.equal(response.status, 200);
    t.ok(response.body.shortUrl);
    t.ok(response.body.longUrl);
    t.end();
  });

  t.test("Duplicate Entry Test", async (t) => {
    const existingURL = await Url.findOne({
      longUrl: "https://www.chess.com/home",
    });

    if (!existingURL) {
      await Url.create({
        longUrl: "https://www.chess.com/home",
        shortUrl: "30DDE57CC40B7933",
      });
    }

    const response = await request(app)
      .post("/urls/createUrl")
      .send({ longUrl: "https://www.chess.com/home" });

    t.equal(response.status, 200);
    t.same(response.body.longUrl, "https://www.chess.com/home");
    t.equal(response.body.shortUrl, "30DDE57CC40B7933");
  });

  t.test("Adding New Entry when Other Entries Exist in DB", async (t) => {
    const response = await request(app)
      .post("/urls/createUrl")
      .send({ longUrl: "https://www.berkeley.edu/" });

    t.equal(response.status, 200);
    t.same(response.body.longUrl, "https://www.berkeley.edu/");
    t.ok(response.body.shortUrl);
  });

  t.test("Invalid URL Error Test", async (t) => {
    const response = await request(app)
      .post("/urls/createUrl")
      .send({ longUrl: "wwww.google.com" });

    t.equal(response.status, 400);
  });

  t.test("Same website but different paths", async (t) => {
    const existingURL = await Url.findOne({
      longUrl: "https://www.google.com/home",
    });

    if (!existingURL) {
      await Url.create({
        longUrl: "https://www.google.com/home",
        shortUrl: "FF542F4892211401",
      });
    }

    const response = await request(app)
      .post("/urls/createUrl")
      .send({ longUrl: "https://www.google.com/imghp" });

    t.equal(response.status, 200);
    t.equal(response.body.longUrl, "https://www.google.com/imghp");
    t.not(response.body.shortUrl, "FF542F4892211401");
  });
  await removeData();
  console.log("Finished Create URL Tests");
  t.end();
});

tap.test("Get All URL Tests", async (t) => {
  console.log("Running Get All URL Tests");
  t.test("Check Get All URL for empty DB", async (t) => {
    await removeData();
    const response = await request(app).get("/urls/");

    t.equal(response.status, 200);
    t.same(response.body, []);
  });

  t.test("Check Get All URL for full DB", async (t) => {
    await injectData();
    const response = await request(app).get("/urls/");

    t.equal(response.status, 200);
    t.equal(response.body.length, 7);
  });
  await removeData();

  console.log("Finished Get All URL Tests");
  t.end();
});

tap.teardown(async () => {
  await removeData();
  await stopServer(server);
  process.exit();
});
