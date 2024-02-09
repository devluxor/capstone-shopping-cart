/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddNewProductForm from '../components/AddNewProductForm'

test('contains input', () => {
  render(<AddNewProductForm/>)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

test('title input changes', async () => {
  const testString = 'Aloha'
  const user = userEvent.setup()
  render(<AddNewProductForm/>)
  const inputTitle = screen.getByRole('textbox', {name: 'Product Title:' })
  await user.type(inputTitle, testString)
  expect(inputTitle).toHaveValue(testString)
})

test('price input changes', async () => {
  const testNumber = '123'
  const user = userEvent.setup()
  render(<AddNewProductForm/>)
  const inputPrice = screen.getByRole('spinbutton', {name: 'Product Price:' })
  await user.type(inputPrice, testNumber)
  expect(inputPrice).toHaveValue(Number(testNumber))
})

test('price input does not accept non-digit characters', async () => {
  const testString = '!@#$'
  const user = userEvent.setup()
  render(<AddNewProductForm/>)
  const inputPrice = screen.getByRole('spinbutton', {name: 'Product Price:' })
  await user.type(inputPrice, testString)
  expect(inputPrice).toHaveValue(null)
})

test('quantity input changes', async () => {
  const testNumber = '123'
  const user = userEvent.setup()
  render(<AddNewProductForm/>)
  const inputQuantity = screen.getByRole('spinbutton', {name: 'Product Quantity:' })
  await user.type(inputQuantity, testNumber)
  expect(inputQuantity).toHaveValue(Number(testNumber))
})
