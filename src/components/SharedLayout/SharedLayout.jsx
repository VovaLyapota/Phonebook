import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Loader } from 'components/Loaders';
import { Navigation } from 'components/Navigation';

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" margin="4px auto 12px">
        <Navigation />
      </Box>
      <main>
        <Suspense
          fallback={
            <Box padding="10% calc(50% - 24px)">
              <Loader />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
