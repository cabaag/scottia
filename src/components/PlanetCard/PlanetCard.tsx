import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { Planet } from "./PlanetType";

export interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.SFC<PlanetCardProps> = ({
  planet,
}: PlanetCardProps) => {
  const [id] = React.useState(+planet.url.match(/.*(\d)\/$/)![1]);

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Diameter:
          {planet.diameter}
        </Typography>
        <Typography variant="h5" component="h2">
          {planet.name}
        </Typography>
        <Typography color="textSecondary">
          Population:
          {planet.population}
        </Typography>
        <Typography variant="body2" component="p">
          Terrain:
          {planet.terrain}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/planet/${id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PlanetCard;
