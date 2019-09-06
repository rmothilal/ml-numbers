/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 * Name Surname <name.surname@gatesfoundation.com>

 * Rajiv Mothilal <rajiv.mothilal@modusbox.com>
 --------------
 ******/
'use strict'

const Test = require('tapes')(require('tape'))
const MlNumber = require('../../src/mlnumber').MlNumber

Test('MlNuber', mlNumberTest => {
  mlNumberTest.test('sumList should add a list of numbers', test => {
    const sum = new MlNumber().sumList([1, 2, 3])
    test.equal(sum.toString(), '6')
    test.end()
  })

  mlNumberTest.test('sumList should add a list of string numbers', test => {
    const sum = new MlNumber().sumList(['1', '2', '3'])
    test.equal(sum.toString(), '6')
    test.end()
  })

  mlNumberTest.test('sumList should add a list of string numbers and normal numbers', test => {
    const sum = new MlNumber().sumList(['1', 2, '3'])
    test.equal(sum.toNumber(), 6)
    test.end()
  })

  mlNumberTest.test('add should add 2 numbers', test => {
    const add = new MlNumber(1).add(2)
    test.equal(add.toString(), '3')
    test.end()
  })

  mlNumberTest.test('add should add 2 string numbers', test => {
    const add = new MlNumber('1').add('2')
    test.equal(add.toString(), '3')
    test.end()
  })

  mlNumberTest.test('add should add 2 string numbers and return a number', test => {
    const add = new MlNumber('1').add('2')
    test.equal(add.toNumber(), 3)
    test.end()
  })

  mlNumberTest.test('add should add a string number and number', test => {
    const add = new MlNumber('1').add(2)
    test.equal(add.toString(), '3')
    test.end()
  })

  mlNumberTest.test('multiply should multiply 2 numbers', test => {
    const multiply = new MlNumber(12).multiply(2)
    test.equal(multiply.toNumber(), 24)
    test.end()
  })

  mlNumberTest.test('multiply should multiply 2 string numbers', test => {
    const multiply = new MlNumber('12').multiply('2')
    test.equal(multiply.toString(), '24')
    test.end()
  })

  mlNumberTest.test('multiply should multiply a string number and normal number', test => {
    const multiply = new MlNumber('12').multiply(2)
    test.equal(multiply.toString(), '24')
    test.end()
  })

  mlNumberTest.test('subtract should subtract 2 numbers', test => {
    const difference = new MlNumber(10).subtract(2)
    test.equal(difference.toNumber(), 8)
    test.end()
  })

  mlNumberTest.test('subtract should subtract 2 string numbers', test => {
    const difference = new MlNumber('10').subtract('2')
    test.equal(difference.toString(), '8')
    test.end()
  })

  mlNumberTest.test('subtract should subtract a string number and normal number', test => {
    const difference = new MlNumber('10').subtract(2)
    test.equal(difference.toString(), '8')
    test.end()
  })

  mlNumberTest.test('divide should divide 2 numbers', test => {
    const divide = new MlNumber(1).divide(2)
    test.equal(divide.toNumber(), 0.5)
    test.end()
  })

  mlNumberTest.test('divide should divide 2 string numbers', test => {
    const divide = new MlNumber('1').divide('2')
    test.equal(divide.toString(), '0.5')
    test.end()
  })

  mlNumberTest.test('divide should divide a string number and normal number', test => {
    const divide = new MlNumber('1').divide(2)
    test.equal(divide.toString(), '0.5')
    test.end()
  })

  mlNumberTest.test('all functions should be able to be strung together', test => {
    const total = new MlNumber('2').add(10)
    total.multiply(5)
    total.subtract(10)
    total.divide(2)
    total.sumList([2,3])
    test.equal(total.toString(), '30')
    test.end()
  })

  mlNumberTest.end()
})
