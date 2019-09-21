$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Packagemaven/checking/logini.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "snippets.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 97700139,
  "status": "passed"
});
formatter.match({
  "location": "snippets.i_complete_action()"
});
formatter.result({
  "duration": 19059,
  "status": "passed"
});
formatter.match({
  "location": "snippets.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 14173,
  "status": "passed"
});
});