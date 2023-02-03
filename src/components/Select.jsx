import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";
import { getProductsByCategory } from "../services/services";

function Select({ setData, categories, getData }) {
  const handleFilter = async (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "All") {
      getData();
    } else {
      const result = await getProductsByCategory(selectedCategory);
      setData(result);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              shrink={true}
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Category
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
              onChange={handleFilter}
            >
              <option value={"All"}>show All</option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default Select;
