import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BiSearch } from "react-icons/bi";
import { getDataBySearch } from "../services/services";

function Search({ text, setText, setData }) {
  const [inputError, setInputError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const textInputValidation = (text) => {
    if (text.length > 9) {
      setValidationMessage("Query too long");
      setInputError(true);
    } else {
      setValidationMessage("");
      setInputError(false);
    }
  };

  const handleTextInput = (e) => {
    textInputValidation(e.target.value);
    setText(e.target.value);
  };

  const handleSubmitText = async () => {
    if (inputError === false) {
      const result = await getDataBySearch(text);
      setData(result);
    }
  };

  return (
    <div className="centerRowElements justifyStart">
      <TextField
        error={inputError}
        id="outlined-error-helper-text"
        label="Search Product"
        helperText={validationMessage}
        sx={{ marginRight: "10px}" }}
        onChange={handleTextInput}
      />
      <Button
        variant="contained"
        endIcon={<BiSearch />}
        onClick={handleSubmitText}
      >
        Search
      </Button>
    </div>
  );
}

export default Search;
