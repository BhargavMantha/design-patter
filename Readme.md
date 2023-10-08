## Start The application in Development Mode
- Install the dependencies `npm install`
- Start the application `npm run start:local`

## Start The application in Production Mode

- Install the dependencies `npm install`
- Create the build `npm run build`
- Start the application `npm run start:production`
- Before starting make sure to creat prod environment `.env.prod` file



https://delivery-solutions.atlassian.net/wiki/spaces/standards/pages/601260033/EC2-based+Place+Order+Async


# This service can be used to make requests to the deliverysolutions.api

The environnement variables is composed of:

```
Please look at the following ticket
```
https://delivery-solutions.atlassian.net/browse/DL-16310

### The process:

1. register a eventEmitter named  `receiveMessageEventEmitter`
2. The same `receiveMessageEventEmitter` is used throughout the lifecycle of the app.
3. the `queueBasedPlaceOrder.processMessage(receiveMessageEventEmitter);` will register a new event `message_received` which will be triggered every-time messages are received. 
4. `await receiveMessageFromSqsService.startSqsMessageReading(receiveMessageEventEmitter);` Based on the number of messages to get env variable <MESSAGES_TO_GET> the messages will be received from the SQS queue
5. now once the messages are received they rare stored in the singleton service in memory.
6.  the so stored stored messages are consumed using `awsSqsMessageSingletonStoreServiceInstance.callPlaceOrder();` which deletes the message on consumption.



## The threshold calculation process :
---
1. The Class `ThresholdCalculatorService` is responsible for calculation the threshold
2. This service is a singleton `https://refactoring.guru/design-patterns/singleton/typescript/example`  
3. the number of instances is calculated by the fn `getNumberOfInstancesFromAutoScalingGroup`
4.  the final formulae boils down to : ` no. of instances * NUMBER_OF_PROCESSABLE_REQUESTS *  THRESHOLD_PERCENTAGE`