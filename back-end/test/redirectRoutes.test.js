import tap from "tap";
import request from "supertest";
import { app, server, stopServer } from "../index.js";
import { injectData, removeData } from "../data/data.js";

tap.test("Redirect Route Test", async (t) => {
  console.log("Running Redirect Route Tests");

  await injectData();
  t.test("Route Redirects correctly", async (t) => {
    const hashedValue = "4E07408562BEDB8B";
    const expectedRedirectURL = "https://neetcode.io/roadmap";
    const response = await request(app).get(`/redirect/${hashedValue}`);
    t.equal(response.status, 302);

    const redirectUrl = response.headers.location;
    t.equal(redirectUrl, expectedRedirectURL);
    t.equal(response.header["location"], expectedRedirectURL);
  });
  t.test("Invalid Route Parameter returns 404", async (t) => {
    const invalidHashedValue = "INVALID_HASH";
    const response = await request(app).get(`/redirect/${invalidHashedValue}`);
    t.equal(response.status, 404); // Check if the status code is 404
  });
  t.test("Missing Route Parameter returns 404", async (t) => {
    const response = await request(app).get("/redirect");
    t.equal(response.status, 404); // Check if the status code is 404
  });

  t.test("Concurrent Requests to Redirect Route", async (t) => {
    const hashedValue = "D4735E3A265E16EE";
    const concurrentRequestCount = 10;
    const requests = Array(concurrentRequestCount).fill(
      request(app).get(`/redirect/${hashedValue}`)
    );

    // Send concurrent requests
    const responses = await Promise.all(requests);

    // Verify the response consistency
    const expectedStatus = 302;
    const expectedRedirectURL = "https://www.berkeley.edu/";
    responses.forEach((response) => {
      t.equal(response.status, expectedStatus);
      t.equal(response.header["location"], expectedRedirectURL);
    });
  });
  console.log("Finished Redirect Route Tests");

  t.end();
});

tap.teardown(async () => {
  await removeData();
  await stopServer(server);
  process.exit();
});
