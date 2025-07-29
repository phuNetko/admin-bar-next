import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
interface SelectBoxProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  size?: 'small' | 'medium';
}

export default function SelectBox({ 
  options, 
  value, 
  onChange, 
  label, 
  size = 'small' 
}: SelectBoxProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    onChange(value);
  };

  return (  
    <FormControl size={size} sx={{ minWidth: 120 }}>
      <InputLabel sx={{'&.Mui-focused': { color: 'black' }}}>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        sx={{
          color: 'black',
          backgroundColor: 'transparent',
          '& .MuiSvgIcon-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            // borderRadius: '40px',
            // border: '1px solid gray',
            // borderColor: 'gray',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
            border: '1px solid',
            // borderColor: 'gray',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
            border: '1px solid',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
