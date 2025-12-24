## ADDED Requirements

### Application Startup

#### Scenario: Successful Launch

Given the correct configuration file `my-config.json` exists
When the `NodeHorizon.exe` is executed
Then the application process should persist
And `workflow.log` should indicate successful initialization
