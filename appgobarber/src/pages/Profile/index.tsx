import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/Auth';
import { Container, Header, HeaderTitle, UserName } from './styles';

const Profile: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();
  const navegateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Profile
          <UserName>{user.name}</UserName>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Profile;
