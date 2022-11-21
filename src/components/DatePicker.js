import React from "react";
// import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Box sx={{ textAlign: "left" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Field name={name}>
          {({ form, field, meta }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <FormControl
                fullWidth
                component="fieldset"
                variant="standard"
                // {...(meta.error && meta.touched && { error: true })}
              >
                {/* <FormLabel component="legend">{label}</FormLabel> */}

                {/* <DateView
                id={name}
                {...field}
                {...rest}
                // wrapperClassName={datepickerstyle}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                placeholderText="Select birthdate"
              /> */}

                <MobileDatePicker
                  label="Date mobile"
                  inputFormat="DD/MM/YYYY"
                  id={name}
                  {...field}
                  closeOnSelect
                  value={value}
                  onChange={(val) => setFieldValue(name, dayjs(val))}
                  renderInput={(params) => (
                    <TextField
                      {...params}
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
                  )}
                />

                {/* <FormHelperText>
                  {meta.error && meta.touched ? meta.error : " "}
                </FormHelperText> */}
              </FormControl>
            );
          }}
        </Field>
      </LocalizationProvider>
    </Box>
  );
};

export default DatePicker;
