import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Box, Stack } from "@mui/material";
import FormikControl from "./FormikControl";
import dayjs from "dayjs";
import Virtualize from "./Virtualize";
const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "Option1" },
    { key: "Option 2", value: "Option2" },
    { key: "Option 3", value: "Option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "R-Option1" },
    { key: "Option 2", value: "R-Option2" },
    { key: "Option 3", value: "R-Option3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "C-Option1" },
    { key: "Option 2", value: "C-Option2" },
    { key: "Option 3", value: "C-Option3" },
  ];

  const initialValues = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: dayjs(new Date()),
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(2).max(8).required("Required"),
    email: Yup.string().email().required("Required"),
    description: Yup.string().trim().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(1).required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "center",
        mt: 5,
        maxWidth: "30rem",
        width: "50%",
        p: 5,
        borderRadius: 5,
        boxShadow: 5,
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Stack direction={"column"} spacing={2}>
                <Virtualize />

                <FormikControl
                  control="input"
                  type="text"
                  //   onKeyPress={(e) => {
                  //     if (/\s/.test(e.key)) {
                  //       e.preventDefault();
                  //     }
                  //   }}
                  noSpaces //prevent adding spaces
                  label="First Name"
                  name="name"
                  fullWidth
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  fullWidth
                />
                <FormikControl
                  control="textarea"
                  label="Description"
                  name="description"
                  rows={3}
                  fullWidth
                />
                <FormikControl
                  control="select"
                  label="Select a topic"
                  name="selectOption"
                  options={dropdownOptions}
                  fullWidth
                  sx={{
                    textAlign: "left",
                  }}
                />
                <FormikControl
                  control="radio"
                  label="Radio Topic"
                  name="radioOption"
                  options={radioOptions}
                />
                <FormikControl
                  control="checkbox"
                  label="Checkbox Topic"
                  name="checkboxOption"
                  options={checkboxOptions}
                />
                <FormikControl
                  control="date"
                  label="Pick a Date"
                  name="birthDate"
                />

                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default FormikContainer;
