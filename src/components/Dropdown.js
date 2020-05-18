import React, { useState, useEffect } from 'react';
import { 
  Dropdown,
  Menu,
  Item,
  Label,
  Select,
  Field,
} from '@zendeskgarden/react-dropdowns';

const DropdownComponent = ({ label, name, options = [], onChange, registerRef, ...renderProps }) => {
  const [selectedItem, setSelectedItem] = useState({
    label: '',
    value: null,
  })

  useEffect(() => {
    const { value } = selectedItem
    if (value) {
      onChange(name, value)
    }
  }, [selectedItem])

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={newSelectedItem => setSelectedItem(newSelectedItem)}
      downshiftProps={{ itemToString: item => item && item.label }}
      {...renderProps}
    >
      <Field>
        {label && <Label>{label}</Label>}
        <Select
          id={name || label}
          name={name || label}
          ref={registerRef}
        >
          {selectedItem.label}
        </Select>
      </Field>
      <Menu>
        {options.map(option => (
          <Item key={option.value} value={option}>
            {option.label}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  )
};

export default DropdownComponent;