/* eslint-disable camelcase */
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import React, { useState } from "react";

export type ResidentType = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
};

export interface ResidentProps {
  residentUrl?: string;
  activateResident?: (resident: ResidentType) => void;
  activeResident?: ResidentType;
}

const Resident: React.SFC<ResidentProps> = ({
  residentUrl,
  activateResident,
  activeResident,
}: ResidentProps) => {
  const [resident, setResident] = useState<ResidentType | null>(
    activeResident || null
  );

  React.useEffect(() => {
    if (residentUrl && !activeResident) {
      const url = residentUrl.replace("http", "https");
      Axios.get(url).then(({ data }) => {
        setResident(data);
      });
    }
  }, [residentUrl]);

  return resident ? (
    <Card onClick={() => activateResident && activateResident(resident)}>
      <CardHeader
        avatar={<Avatar />}
        title={resident?.name}
        style={{
          cursor: "pointer",
        }}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Eye color:
          {resident?.eye_color}
        </Typography>
        <Typography variant="body2" component="p">
          Mass:
          {resident?.mass} kg
        </Typography>
        <Typography variant="body2" component="p">
          Height:
          {resident?.height} cm
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};

export default Resident;
