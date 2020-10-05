/**
 * Test for getting started with Selenium.
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;

test.describe("My-App", function() {
    test.beforeEach(function(done) {
        this.timeout(200000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:8082/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("localhost:8082/" + target));
        });
    }

    function assertH2(target) {
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    test.it("Test go to Login", function(done) {
        goToNavLink("Login");

        assertH2("Login");
        matchUrl("login" );

        done();
    });

    test.it("Test go to Register", function(done) {
        goToNavLink("Register");

        assertH2("Register");
        matchUrl("register" );

        done();
    });

    test.it("Test go to Me", function(done) {
        goToNavLink("Me");

        assertH2("Om mig");
        matchUrl("");

        done();
    });
});
