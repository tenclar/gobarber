import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/Auth';
import { Container, Header, HeaderTitle, UserName } from './styles';

const AppointmentCreated: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Profile
          <UserName> Appointment</UserName>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default AppointmentCreated;
