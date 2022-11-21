import React from "react";
import { Field } from "formik";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Select as MuiSelect } from "@mui/material";
const Select = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Box>
      <Field name={name}>
        {(props) => {
          const { field, meta } = props;
          return (
            <FormControl
              fullWidth
              {...(meta.error && meta.touched && { error: true })}
            >
              <InputLabel id="demo-simple-select-label">{label}</InputLabel>
              <MuiSelect
                labelId="demo-simple-select-label"
                id={name}
                label={label}
                {...field}
                {...rest}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.key}
                  </MenuItem>
                ))}
              </MuiSelect>
              <FormHelperText>
                {meta.error && meta.touched ? meta.error : " "}
              </FormHelperText>
            </FormControl>
          );
        }}
      </Field>
    </Box>
  );
};

export default Select;
