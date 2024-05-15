
## Description






## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

#### How to test 1 single test case in jest

Lets consider the following JEST test case

```
import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

```
#### Option 1
```
    jest -t '<describeString> <itString>'

-> translate to ->> jest -t 'sum module' 'adds 1 + 2 to equal 3'

```
#### Option 2
# Warning : This functionality is only for Unix machines
1. The main function is defined. Functions in Bash are declared using the function keyword followed by the function name and parentheses. In this case, the main function serves as the entry point of the script.
2. Inside the main function, two variables are declared and assigned values:
  a. testDir: Represents the directory where the test files are located. It is set to "test".<br>
  b. testFiles: Contains the result of a series of commands chained together using pipes (|). Let's break it down:<br>
    i. grep -rl '\.only(' $testDir: Searches for files in the $testDir directory that contain the text '.only('. The -r option performs a recursive search, and the -l option prints only the names of the files that match.<br>
    ii. grep '\.test\.js$': Filters the filenames from the previous grep command to include only files ending with .spec.ts.<br
    iii. xargs: Converts the filenames into a space-separated list of arguments that will be passed to the next command.<br>
    iv. The script checks if the testFiles variable is empty by using the conditional statement if [ -z "$testFiles" ]; then. The -z flag checks if the variable is empty. If testFiles is empty, it means no test files were found, and the runJest function is called with an empty argument.<br>

3. If testFiles is not empty, meaning there are test files, the runJest function is called with the testFiles variable as an argument.
4. The runJest function is defined, which takes one argument (testFiles). Inside the function:
  a. The testFiles argument is assigned to the testFiles variable of the function.
  b. A new variable cmd is created, which contains the command to be executed. It uses the jest command to run the tests and includes additional options like --logHeapUsage and -c jest.config.js. The $testFiles variable is appended to the end of the command to specify the specific test files to be executed.
  c. The echo command is used to print the command being executed.
  d. The command stored in cmd is executed by $cmd.
5. Finally, the main function is called with the command line arguments passed to the script ("$@").

#### The script is in the following PATH
`./tools/run-jest.sh`

```
#!/bin/bash

function main() {
  local testDir="test"
  local testFiles="$(grep -rl '\.only(' $testDir | grep '\.test\.js$' | xargs)"

  if [ -z "$testFiles" ]; then
    runJest ""
  else
    runJest "$testFiles"
  fi
}

function runJest() {
  local testFiles="$1"
  local cmd="jest --logHeapUsage -c jest.config.js $testFiles"

  echo "Running cmd: $cmd"
  $cmd
}

main "$@"
```
USAGE: `mark the test to run with .only and run npm run test`

example :
```
import { describe, expect, test } from '@jest/globals';

describe('Testing', () => {
    it.only('test 1', () => {
        console.time("1");
        expect(1).toBe(1);
        console.timeEnd("1");

    });

    it.only('test 2', () => {
        console.time("2");

        expect(2).toBe(2);
        console.timeEnd("2");

    });
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    it('test 3', async () => {
        await delay(1000000);
        expect(3).toBe(3);


    });

    it('test 4', () => {
        expect(4).toBe(4);
    });

    it('test 5', () => {
        expect(5).toBe(5);
    });

    it('test 6', () => {
        expect(6).toBe(6);
    });

    it('test 7', () => {
        expect(7).toBe(7);
    });

    it('test 8', () => {
        expect(8).toBe(8);
    });

});

```
OUTPUT:
```
npm run test                  ✔  at 06:40:11 PM  

> workflow-execution@0.0.1 test /home/bhargav/Documents/Order-Service-Rewrite/workflow-execution
> tools/run-jest.sh

Running cmd: jest --logHeapUsage -c jest.config.js 
 PASS  src/testing.spec.ts (147 MB heap size)
  ● Console

    console.time
      1: 0 ms

      at Object.<anonymous> (testing.spec.ts:7:17)

    console.time
      2: 0 ms

      at Object.<anonymous> (testing.spec.ts:15:17)

 PASS  src/app.controller.spec.ts (160 MB heap size)
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       6 skipped, 3 passed, 9 total
Snapshots:   0 total
Time:        2.41 s
Ran all test suites.

```


## Stay in touch

- Authors - [Bhargav Mantha](manthabhargav@gmail.com)



