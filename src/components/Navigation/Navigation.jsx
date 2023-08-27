import { useAuth } from 'hooks';
import { CenterContainer } from 'components/CenterContainer';
import { UserMenu } from './UserMenu';
import { LogMenu } from './LogMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <CenterContainer>{isLoggedIn ? <UserMenu /> : <LogMenu />}</CenterContainer>
  );
};
