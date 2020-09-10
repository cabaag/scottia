import { Grid, Typography } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { match } from "react-router-dom";
import styled from "styled-components";
import { Planet } from "../../components/PlanetCard/PlanetType";
import Resident, { ResidentType } from "./components/Resident/Resident";
import ResidentsPlanet from "./components/Residents/Residents";

const Root = styled(Grid)`
  flex: 1;
  padding: 16px 0;
`;

export interface PlanetPageProps {
  match: match<{
    planet: string;
  }>;
}

export interface PlanetPageState {
  planet?: Planet;
  planetId: string;
  activeResident?: ResidentType | null;
}

class PlanetPage extends React.Component<PlanetPageProps, PlanetPageState> {
  constructor(props: PlanetPageProps) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    const { planet } = this.props.match.params;
    this.state = {
      planetId: planet,
    };
  }

  componentDidMount() {
    const { planetId } = this.state;
    Axios.get(`https://swapi.dev/api/planets/${planetId}/`)
      .then(({ data }) => {
        this.setState({
          planet: data,
        });
      })
      .catch(() => {});
  }

  handleActivateResident = (resident: ResidentType) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (resident.name === this.state?.activeResident?.name) {
      this.setState({
        activeResident: null,
      });
    } else {
      this.setState({
        activeResident: resident,
      });
    }
  };

  render() {
    const { planet, activeResident } = this.state;
    return (
      <Root container direction="row" spacing={4}>
        <Grid item container xs={12} sm={3}>
          <ResidentsPlanet
            residents={planet?.residents || []}
            activateResident={this.handleActivateResident}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          spacing={3}
          xs={activeResident ? 9 : 12}
          sm={activeResident ? 6 : 9}
        >
          <Typography variant="h3" component="p" gutterBottom>
            {planet?.name}
          </Typography>
          <p>
            Population:
            {planet?.population}
          </p>
          <p>
            Climate:
            {planet?.climate}
          </p>
          <p>
            Diameter:
            {planet?.diameter}
          </p>
          <p>
            Terrain:
            {planet?.terrain}
          </p>
        </Grid>
        {activeResident ? (
          <Grid item container xs={3} direction="column" spacing={3}>
            <Resident activeResident={activeResident} />
          </Grid>
        ) : null}
      </Root>
    );
  }
}

export default PlanetPage;
