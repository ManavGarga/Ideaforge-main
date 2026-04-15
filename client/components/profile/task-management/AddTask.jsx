import {
  Box,
  TextField,
  Button,
  Typography,
  ButtonGroup,
  FormHelperText,
} from "@mui/material";
import PropTypes from "prop-types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext, Controller } from "react-hook-form";

const AddTask = ({ setSelectedDate, selectedDate }) => {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "595px",
        minHeight: "325px",
        border: "2px solid #8b5cf6",
        borderRadius: "5px",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <TextField
          variant="outlined"
          label="Task Title"
          type="text"
          sx={{
            input: { color: '#1e293b' },
            mt: 1,
            mr: 1,
            width: "50%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333333",
              },
              "&:hover fieldset": {
                borderColor: "#333333",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#333333",
              },
            },
            "& .MuiInputLabel-root": {
              color: '#1e293b',
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: '#1e293b',
            },
          }}
          {...register("title", { required: "Task title is required" })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate);
              setValue("date", newDate);
            }}
            label="Select a Date"
            renderInput={(params) => <TextField {...params} />}
            sx={{
              mt: 1,
              width: "50%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#333333",
                },
                "&:hover fieldset": {
                  borderColor: "#333333",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#333333",
                },
              },
              "& .MuiInputLabel-root": {
                color: '#1e293b',
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: '#1e293b',
              },
              "& .MuiIconButton-root": {
                color: '#1e293b',
              },
              "& .MuiInputBase-inputAdornedEnd": {
                color: '#1e293b',
              },
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: "flex", mt: 1 }}>
        <TextField
          multiline
          rows={4}
          sx={{
            textarea: { color: '#1e293b' },
            mt: 1,
            mr: 1,
            width: "50%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333333",
              },
              "&:hover fieldset": {
                borderColor: "#333333",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#333333",
              },
            },
            "& .MuiInputLabel-root": {
              color: '#1e293b',
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: '#1e293b',
            },
          }}
          variant="outlined"
          label="Task Description"
          {...register("description", {
            required: "Task description is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              mb: 2,
              width: "50%",
              color: '#1e293b',
            }}
          >
            Task Priority
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Controller
              name="priority"
              control={control}
              rules={{ required: "Please select a priority" }}
              defaultValue=""
              render={({ field }) => (
                <>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    fullWidth
                  >
                    <Button
                      sx={{
                        backgroundColor:
                          field.value === "Low" ? "#333333" : "transparent",
                        border: "1px solid #8b5cf6",
                        color: field.value === "Low" ? "white" : "#333333",
                        "&:hover": {
                          border: "1px solid #8b5cf6",
                          backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                          color: "#a0a0a0",
                        },
                      }}
                      onClick={() => setValue("priority", "Low")}
                    >
                      Low
                    </Button>
                    <Button
                      onClick={() => setValue("priority", "Moderate")}
                      sx={{
                        backgroundColor:
                          field.value === "Moderate"
                            ? "#333333"
                            : "transparent",
                        border: "1px solid #8b5cf6",
                        color: field.value === "Moderate" ? "white" : "#333333",
                        "&:hover": {
                          border: "1px solid #8b5cf6",
                          backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                          color: "#a0a0a0",
                        },
                      }}
                    >
                      Moderate
                    </Button>
                    <Button
                      onClick={() => setValue("priority", "High")}
                      sx={{
                        backgroundColor:
                          field.value === "High" ? "#333333" : "transparent",
                        border: "1px solid #8b5cf6",
                        color: field.value === "High" ? "white" : "#333333",
                        "&:hover": {
                          border: "1px solid #8b5cf6",
                          backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                          color: "#a0a0a0",
                        },
                      }}
                    >
                      High
                    </Button>
                  </ButtonGroup>
                </>
              )}
            />
            {errors.priority && (
              <FormHelperText error>{errors.priority.message}</FormHelperText>
            )}
          </Box>
        </Box>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          color: "#a0a0a0",
          backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
          "&:hover": { backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)" },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

AddTask.propTypes = {
  setSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};

export default AddTask;
