import * as React from 'react';
import {Container, LinearProgress} from "@mui/material";

export default function LoadingWrapper({children, isLoading, maxWidth}) {
  return (
      <Container maxWidth={maxWidth}>
          {/* Display a linear progress bar if isLoading is true */}
          {isLoading?
              <LinearProgress />
              :
              <>
                {/* Render the children components */}
                {children}
              </>
          }
      </Container>
  );
}