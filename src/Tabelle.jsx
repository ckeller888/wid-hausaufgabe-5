import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./App.css";

export const Tabelle = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell id="TableHeader">Datensatz</TableCell>
            <TableCell id="TableHeader">Auszug</TableCell>
            <TableCell id="TableHeader">Anbieter</TableCell>
            <TableCell id="TableHeader">Dienst</TableCell>
            <TableCell id="TableHeader">Metaqualität</TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="TableBody">
          {data.map((zeile) => (
            <TableRow>
              <TableCell className="TableWrapper">{zeile.datensatz}</TableCell>
              <TableCell className="TableWrapper">
                {zeile.zusammenfassung}
              </TableCell>
              <TableCell className="TableWrapper">{zeile.anbieter}</TableCell>
              <TableCell className="TableWrapper">{zeile.service}</TableCell>
              <TableCell className="TableWrapper">{zeile.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
