
import React from 'react'
import { InputGroup, FormControl, Button} from 'react-bootstrap'

const InputExpense = () => {
  return (
<>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Amount</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
  <InputGroup size="sm">
    <InputGroup.Text id="inputGroup-sizing-sm">Date</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <div className='buttonList'>
    <Button className='buttonAdd'>Add</Button>
    <Button className='buttonCancel'>Cancel</Button>
  </div>
</>
  )
}

export default InputExpense