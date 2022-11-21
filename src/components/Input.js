import React from "react";
import {
  Field,
  //  ErrorMessage
} from "formik";
import { Box, TextField } from "@mui/material";
// import TextError from "./TextError";
const Input = (props) => {
  const { label, name, noSpaces, ...rest } = props;
  return (
    <Box>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name}>
        {(props) => {
          const { field, meta } = props;
          return (
            <TextField
              label={label}
              id={name}
              {...(noSpaces && {
                onKeyPress: (e) => {
                  if (/\s/.test(e.key)) {
                    e.preventDefault();
                  }
                },
              })}
              {...field}
              {...rest}
              {...(meta.error && meta.touched
                ? {
                    error: true,
                    helperText: meta.error,
                  }
                : {
                    error: false,
                    helperText: " ",
                  })}
            />
          );
        }}
      </Field>
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </Box>
  );
};

export default Input;
