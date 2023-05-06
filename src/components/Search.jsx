import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/searched/" + input);
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          className="search"
          sx={{
            "& fieldset": { border: 'none' },
          }}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
