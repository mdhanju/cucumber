$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logIn.feature");
formatter.feature({
  "line": 1,
  "name": "Verify - Log In Page",
  "description": "",
  "id": "verify---log-in-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2590284881,
  "status": "passed"
});
formatter.before({
  "duration": 113129,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "GMail Log In page",
  "description": "",
  "id": "verify---log-in-page;gmail-log-in-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a log In screen for Gmail",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see input for \"Email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should see input for \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see Sign In button",
  "keyword": "And "
});
formatter.match({
  "location": "logIn.i_am_a_log_In_screen_for_Gmail()"
});
formatter.result({
  "duration": 2850575386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 24
    }
  ],
  "location": "logIn.i_should_see_input_for(String)"
});
formatter.result({
  "duration": 5665785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "logIn.i_should_see_input_for(String)"
});
formatter.result({
  "duration": 82304,
  "status": "passed"
});
formatter.match({
  "location": "logIn.i_should_see_Sign_In_button()"
});
formatter.result({
  "duration": 32411,
  "status": "passed"
});
formatter.after({
  "duration": 72159,
  "status": "passed"
});
formatter.after({
  "duration": 151071169,
  "status": "passed"
});
formatter.before({
  "duration": 1913576796,
  "status": "passed"
});
formatter.before({
  "duration": 65529,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Footer on Gmail Sign In Page",
  "description": "",
  "id": "verify---log-in-page;verify-footer-on-gmail-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am a log In screen for Gmail with \"user1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should see link \"About Google\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see link \"Privacy\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see link \"Terms\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see link \"Help\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 37
    }
  ],
  "location": "logIn.i_am_a_log_In_screen_for_Gmail_with(String)"
});
formatter.result({
  "duration": 92630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Google",
      "offset": 19
    }
  ],
  "location": "logIn.i_should_see_link(String)"
});
formatter.result({
  "duration": 92183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 19
    }
  ],
  "location": "logIn.i_should_see_link(String)"
});
formatter.result({
  "duration": 101119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms",
      "offset": 19
    }
  ],
  "location": "logIn.i_should_see_link(String)"
});
formatter.result({
  "duration": 88279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Help",
      "offset": 19
    }
  ],
  "location": "logIn.i_should_see_link(String)"
});
formatter.result({
  "duration": 94164,
  "status": "passed"
});
formatter.after({
  "duration": 67850,
  "status": "passed"
});
formatter.after({
  "duration": 44658906,
  "status": "passed"
});
});