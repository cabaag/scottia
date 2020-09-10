import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import { Planet } from "../../components/PlanetCard/PlanetType";

const Loader = styled(CircularProgress)`
  width: 100px !important;
  height: 100px !important;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Root = styled(Grid)`
  flex: 1;
`;

function useQuery() {
  return new URLSearchParams(useLocation()?.search);
}

const MainPage: React.SFC<{}> = () => {
  const page = +(useQuery()!.get("page") ?? 1);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    setLoading(true);
    Axios.get(`https://swapi.dev/api/planets/?page=${page}`)
      .then(({ data }) => {
        setPlanets(data.results);
        setHasPrevPage(data.previous !== null);
        setHasNextPage(data.next !== null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <Root container direction="column" spacing={4}>
      <Grid
        item
        container
        direction="row"
        spacing={2}
        justify="center"
        alignItems="center"
        style={{ flex: 1 }}
      >
        {loading ? (
          <Loader />
        ) : (
          planets
            .filter((planet: Planet) => planet.name.includes(filter))
            .map((planet: Planet) => (
              <Grid item xs={2} sm={6} key={planet.name}>
                <PlanetCard planet={planet} />
              </Grid>
            ))
        )}
      </Grid>
      <Grid item container direction="row" justify="flex-end" spacing={2}>
        <Grid item>
          <CustomLink to={`/home?page=${page - 1}`}>
            <LoadingButton
              loading={loading}
              variant="contained"
              color="primary"
              disabled={!hasPrevPage || page === 0}
            >
              Previous
            </LoadingButton>
          </CustomLink>
        </Grid>
        <Grid item>
          <CustomLink to={`/home?page=${page + 1}`}>
            <LoadingButton
              loading={loading}
              variant="contained"
              color="primary"
              disabled={!hasNextPage}
            >
              Next
            </LoadingButton>
          </CustomLink>
        </Grid>
      </Grid>
    </Root>
  );
};

export default MainPage;
