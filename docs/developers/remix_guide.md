---
title: Remix IDE - testing and deployment
sidebar_position: 6
description: Testing and Deploying Smart Contracts using Remix IDE
keywords:
  - subspace network
  - remix ide
---

### Remix IDE guide
---
Remix is a great tool that allows you to easily write, test and deploy smart contracts on any of the existing EVM-compatible blockchains. Moreover, integration with Metamask helps to utilize any RPC, that’s why we’ve just set up a reference to Subspace core EVM in our Metamask wallet!

Remix has [amazing documentation](https://remix-ide.readthedocs.io/en/latest/), but **this guide** will cover everything to get you started.

1. Using the browser of your choice navigate to **[Remix website](https://remix.ethereum.org)**
You will see a file explorer and interface for creating new workspaces, integrations with GitHub, Gist, IPFS, HTTPS, preloaded templates and plugins.
Let’s create a new workspace by clicking on a + sign beside Workspaces.

 ![Remix-1](../../static/img/developers/Remix-1.png)

2. We can choose any name and use ERC20 template

 ![Remix-2](../../static/img/developers/Remix-2.png)

3. Right after you create your workspace,  you will see a few folders created for you.
Let’s click on contract and have a look at MyToken.sol

 ![Remix-3](../../static/img/developers/Remix-3.png)

4. Here, you can change the name of your contract(in the example, to Counter), name of the token (in this example, we're calling it SubspaceTestToken) and token symbol (we're using TSSC).
Let’s add a simple smart contract that has three functions - set number, increments that number by one, and decrements the number by one.

 ```bash
  // SPDX-License-Identifier: MIT
 pragma solidity ^0.8.9;

 import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

 contract Counter is ERC20 {
     constructor() ERC20("SubspaceTestToken", "TSSCtest") {}

     uint256 public number;

     function setNumber(uint256 newNumber) public {
         number = newNumber;
     }

     function increment() public {
         number++;
     }

     function decrement() public {
         number--;
     }
  }
 ```

 ![Remix-4](../../static/img/developers/Remix-4.png)

5. Then, let’s compile a `Counter` contract. In order to compile, click on Solidity Compiler on the left and choose the compiler version that corresponds to the solidity version on your contract. In our case, it’s the version 0.8.9
Click on compile `MyToken` and check if it compiles correctly! If it does, you will see a green checkmark by the compiler.

 ![Remix-5](../../static/img/developers/Remix-5.png)

6. Deploying a smart contract could be an expensive procedure, based on the gas costs associated with the transaction. That is why it’s recommended that you thoroughly test the smart contracts for correctness before proceeding with deployment.
In order to test the contract, let’s open a tests folder and have a look at `MyToken.sol` created for us.      
Let’s first try to run a test as is, without making any changes.

 ![Remix-6](../../static/img/developers/Remix-6.png)

7. To run the tests, select Solidity Unit Tests in the bar on the left and click run.

 ![Remix-7](../../static/img/developers/Remix-7.png)

8. As expected, the test failed because we manually changed the token name and symbol.
This is TDD in action! Let’s adjust the tests and add a few assertions for increment and decrement functions.In this example, we will set up an initial value of `number` to 2 and `increment` and then `decrement` it by 1. We would expect the number to increase to 3 and then decrease back to 2.

 ```bash
  contract CounterTest is Counter {

     function testTokenInitialValues() public {
         Assert.equal(name(), "SubspaceTestToken", "token name did not match");
         Assert.equal(symbol(), "TSSCtest", "token symbol did not match");
         Assert.equal(decimals(), 18, "token decimals did not match");
         Assert.equal(totalSupply(), 0, "token supply should be zero");
     }

     Counter public counter;

     function setUp() public {
         counter = new Counter();
         counter.setNumber(2);
     }

     function testIncrement() public {
         counter.increment();
         Assert.equal(counter.number(), 3, "test increment did not match");
     }

     function testDecrement() public {
         counter.decrement();
         Assert.equal(counter.number(), 2, "test decrement did not match");
     }
  }
 ```

 ![Remix-8](../../static/img/developers/Remix-8.png)

9. Great, all tests are now passing which means our smart contract `Counter` is indeed working as we expect.
We’re all set to deploy it now!

 ![Remix-9](../../static/img/developers/Remix-9.png)

10. For deploying, click on Deploy and Run Transactions tab on the left.
Remix allows you to use one of the existing EVMs or inject your own provider by integration with MetaMask.
Since we already have a Metamask Account set up, let’s use this option.

 ![Remix-10](../../static/img/developers/Remix-10.png)

11. You will be prompted to confirm the password with MetaMask, just make sure that the network you’re connected to is Subspace EVM.

 ![Remix-11](../../static/img/developers/Remix-11.png)

12. Adjust the gas limit and deploy your smart contract on Subspace Core EVM!
Now your transaction is recorded and you can interact with your smart contract at the bottom of the page - you can call the functions `increment` and `decrement` as well as `setNumber`

 ![Remix-12](../../static/img/developers/Remix-12.png)

Congratulations, you've just deployed your smart contract on Subspace Core EVM!

