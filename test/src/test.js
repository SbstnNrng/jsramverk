/**
 * Test for getting started with Selenium.
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;

test.describe("My-App", async function() {
    test.beforeEach(async function(done) {
        this.timeout(200000);
        browser = await new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        await browser.get("http://localhost:8082/");
        await done();
    });

    test.afterEach(async function(done) {
        await this.timeout(200000);
        await browser.quit();
        await done();
    });


    async function goToNavLink(target) {
        await browser.findElement(By.linkText(target)).then(async function(element) {
            await element.click();
        });
    }

   async function matchUrl(target) {
        await browser.getCurrentUrl().then(async function(url) {
            await assert.ok(url.endsWith("localhost:8082/" + target));
        });
    }

    async function assertH2(target) {
        await browser.findElement(By.css("h2")).then(async function(element) {
            await element.getText().then(async function(text) {
                assert.equal(text, target);
            });
        });
    }

    test.it("Test go to Login", async function(done) {
        await goToNavLink("Login");

        await assertH2("Login");
        await matchUrl("login" );

        await done();
    });

    test.it("Test go to Register", async function(done) {
        await goToNavLink("Register");

        await assertH2("Register");
        await matchUrl("register" );

        await done();
    });

    test.it("Test go to Me", async function(done) {
        await goToNavLink("Me");

        await assertH2("Om mig");
        await matchUrl("");

        await done();
    });
});
