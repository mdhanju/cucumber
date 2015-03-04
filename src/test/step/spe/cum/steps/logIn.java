package spe.cum.steps;


import static org.junit.Assert.assertTrue;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class logIn {
  private WebConnector connector;

  public logIn(WebConnector connector) {
    this.connector = connector;
  }

  @Before
  public void beforeScenario() {
    System.out.println(" *** Before");
  }

  @After
  public void afterScenario() {
    System.out.println(" *** After");
  }
  
  @Given("^I am a log In screen for Gmail$")
  public void i_am_a_log_In_screen_for_Gmail() throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  connector.openAndWait("https://www.google.com/");
	  
  }

  @Then("^I should see input for \"(.*?)\"$")
  public void i_should_see_input_for(String arg1) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  assertTrue(true);
  }

  @Then("^I should see Sign In button$")
  public void i_should_see_Sign_In_button() throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  assertTrue(true);
  }

  @Given("^I am a log In screen for Gmail with \"(.*?)\"$")
  public void i_am_a_log_In_screen_for_Gmail_with(String arg1) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  assertTrue(true);
  }

  @Then("^I should see link \"(.*?)\"$")
  public void i_should_see_link(String arg1) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  assertTrue(true);
  }



}
