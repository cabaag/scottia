import React from "react";
import { Grid } from "@material-ui/core";
import Resident, { ResidentType } from "../Resident/Resident";

export interface ResidentsPlanteProps {
  residents: string[];
  activateResident: (resident: ResidentType) => void;
}

const ResidentsPlanet: React.SFC<ResidentsPlanteProps> = ({
  residents,
  activateResident,
}: ResidentsPlanteProps) => (
  <Grid container direction="column" spacing={2}>
    {residents?.map((resident) => (
      <Grid item key={resident}>
        <Resident residentUrl={resident} activateResident={activateResident} />
      </Grid>
    ))}
  </Grid>
);

export default ResidentsPlanet;
