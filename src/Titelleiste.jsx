import { Box, AppBar, Toolbar } from "@mui/material";
import "./App.css";
import { Dropdown } from "./Dropdown";

export const Titelleiste = ({
  anbieterLabel,
  diensteLabel,
  anbieterOptions,
  diensteOptions,
  anbieterValue,
  diensteValue,
  incrementAnbieter,
  incrementDienste,
  incrementResetAnbieter,
  incrementResetDienste,
}) => (
  <Box display="flex" alignItems="center" gap={2}>
    <AppBar
      position="static"
      className="App-header"
      style={{ backgroundColor: "white" }}
    >
      <Toolbar>
        <img src={"src/geoharvester.png"} width={250} />
        <p id="HeaderText">Ein Katalog für Schweizer Geodienste</p>

        <div id="dropdown">
          <Dropdown
            label={anbieterLabel}
            options={anbieterOptions}
            value={anbieterValue}
            increment={incrementAnbieter}
            onClick={incrementResetAnbieter}
          />
          <Dropdown
            label={diensteLabel}
            options={diensteOptions}
            value={diensteValue}
            increment={incrementDienste}
            onClick={incrementResetDienste}
          />
        </div>
      </Toolbar>
    </AppBar>
  </Box>
);
