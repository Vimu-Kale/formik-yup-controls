import React from "react";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Field } from "formik";
const CheckboxGroup = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <Box sx={{ textAlign: "left" }}>
      <Field name={name}>
        {(props) => {
          const { field, meta } = props;
          //   console.log(field, meta);
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              {...(meta.error && meta.touched && { error: true })}
            >
              <FormLabel component="legend">{label}</FormLabel>
              <FormGroup {...rest}>
                {options.map((option) => {
                  return (
                    <FormControlLabel
                      key={option.key}
                      {...field}
                      value={option.value}
                      id={option.value}
                      control={<Checkbox />}
                      label={option.key}
                      checked={field.value.includes(option.value)}
                    />
                  );
                })}
              </FormGroup>
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

export default CheckboxGroup;
