import React from "react";
import {
  Field,
  //  ErrorMessage
} from "formik";
import { Box, TextField } from "@mui/material";
const Textarea = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Box>
      <Field name={name}>
        {(props) => {
          const { field, meta } = props;
          return (
            <TextField
              multiline
              id={name}
              label={label}
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
    </Box>
  );
};

export default Textarea;
