#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('a password generator ')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-number', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()


const {length, save, numbers, symbols } = program.opts()

//generate password

const generatedPassword = createPassword(length, numbers, symbols)

//save to file
if (save) {
    savePassword(generatedPassword)
  }

//copy to clipboard
clipboardy.writeSync(generatedPassword)

//output

log(chalk.blue(' Generated Password: ') + chalk.bold.underline(generatedPassword))
log(chalk.yellow.bold('password copied to clipboard'))