import * as figures from 'figures'
import { Box, Color } from 'ink'
import * as React from 'react'
import { KeyPressed } from './BoxPrompt'

interface Props {
  label: string
  value: string
  description?: string
  keyPressed: KeyPressed
  checked: boolean
  focus: boolean
  onChange: (value: string) => void
}

export const RadioButton: React.FC<Props> = props => {
  const symbol = props.checked ? figures.radioOn : figures.radioOff
  const { label, checked, focus, onChange, value, keyPressed } = props

  React.useEffect(() => {
    if (focus && keyPressed.key === 'submit') {
      onChange(value)
    }
  }, [checked, focus, keyPressed.key])

  return (
    <Box>
      {focus ? <Color blue>{symbol}</Color> : symbol}
      <Box marginLeft={1}>{focus ? <Color blue>{label.padEnd(20)}</Color> : label.padEnd(20)}</Box>
      <Color dim>{props.description ? props.description.padEnd(20) : ''}</Color>
    </Box>
  )
}
