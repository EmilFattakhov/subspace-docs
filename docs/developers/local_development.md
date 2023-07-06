---
title: Local development
sidebar_position: 8
description: Guide on local development Subspace Node and Farmer
keywords:
  - local development
  - subspace network
---



### Setting up local development environment

**You can always set up a local network to test and deploy your smart contract!**

To establish a full local network, you need to run a local node, a core evm-domain, and a farmer.

First, visit the **[Subspace releases](https://github.com/subspace/subspace/releases)** page and download the most up-to-date stable versions of the node and farmer.

:::tip
For each release, there are two versions:

1. x86-64-v3: for newer processors from around 2015 and onwards
2. x86-64-v2: for older processors from around 2009 and some older VMs

Older processors/VMs are no longer supported by official releases, but they can still be compiled manually if desired.
:::

After downloading both files that suit your system, start a node using your preferred terminal. If you want to start an EVM domain on your local machine, you need to specify:

Your local RPC server port
Your local web-socket RPC port
You can do this with the following command:

```bash
./your_subspace_node_path --dev --alice --ws-port 2545 --domain-id 3 --dev --ws-port 8545
```

This will create a local RPC on port **8545**.

Secondly, you need to start a farmer by running the following command:

```bash
 ./your_subspace_farmer_path --base-path tmp-farmer farm --plot-size 100M --reward-address [YOUR_ADDRESS]
```

You can specify the desired plot size, but 100M should be sufficient.

**And that’s it!** By starting your `local node` and a `farmer`, you have your **local RPC** ready for testing and deploying your smart contracts! You can easily connect your MetaMask account to the local development network, as well as use Remix or Foundry in order to test and deploy smart contract on a local network! 