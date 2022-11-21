import React from "react";
import { Box } from "@mui/material";
import { Field } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <Box sx={{ textAlign: "left" }}>
      <Field name={name}>
        {(props) => {
          const { field, meta } = props;
          //   console.log(field);
          return (
            <FormControl
              variant="standard"
              {...(meta.error && meta.touched && { error: true })}
            >
              <FormLabel>{label}</FormLabel>
              <RadioGroup aria-labelledby={label} {...field} {...rest}>
                {options.map((option) => {
                  return (
                    <FormControlLabel
                      key={option.key}
                      value={option.value}
                      id={option.value}
                      control={<Radio size="small" />}
                      label={option.key}
                      checked={field.value === option.value}
                    />
                  );
                })}
              </RadioGroup>
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

export default RadioButtons;
