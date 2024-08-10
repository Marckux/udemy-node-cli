# TypeScript CLI Tool

This is a simple command-line interface (CLI) tool built with TypeScript and powered by the `yargs` library. The tool demonstrates how to use various features of `yargs` in a TypeScript environment, including handling options, adding checks, and managing commands.

## Features

- **Command-line Argument Parsing**: Easily parse and manage CLI arguments.
- **Boolean Flags**: Supports boolean options like `--verbose` or `-v`.
- **Numeric Options**: Handle numeric inputs with validation.
- **Custom Validation**: Add custom checks for arguments to ensure valid inputs.
- **Help Documentation**: Automatically generate helpful CLI documentation.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Node.js package manager (comes with Node.js)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Marckux/udemy-node-cli.git
    cd udemy-node-cli
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

### Running for development
You can run nodemon with:
```bash
npm run dev:nodemon
```

Or you can run dev without nodemon:
```bash
npm run dev
```

### Running the CLI


You can run the CLI tool using `ts-node`:

```bash
npx ts-node src/app.ts -b <base num> [-l <limit>] [-s <true or false>] [-d <dst folder>] [-n <name>]
```


