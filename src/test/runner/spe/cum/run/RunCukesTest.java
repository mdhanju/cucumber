package spe.cum.run;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
glue = "spe.cum.steps",
plugin = {"pretty",
		"html:target/cucumber",
		"json:target/result.json"})
public class RunCukesTest {

}
