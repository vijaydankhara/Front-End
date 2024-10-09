import React from 'react'
import CondiIfElse from './ConditionalRendring/if-else'
import Turnary from './ConditionalRendring/turnary'
import LogicalOp from './ConditionalRendring/Logical'
import SwitchCase from './ConditionalRendring/SwitchCase'
import Form from './Form/Form'
import ToggleButton from './Toggle/Toggle'
import Counter from './Counter/Counter'

const AllData = () => {
  return (
    <div>
      <CondiIfElse/><br /><br /><br />
      <Turnary/><br /><br /><br />
      <LogicalOp/><br /><br /><br />
      <SwitchCase/><br /><br /><br />
      <Form/><br /><br /><br />
      <ToggleButton/><br /><br /><br />
      <Counter/><br /><br /><br />
    </div>
  )
}

export default AllData
