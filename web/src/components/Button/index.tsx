import React, { ButtonHTMLAttributes } from 'react';
import { boolean } from 'yup';
import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
const Button: React.FC<InputProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando ... ' : children}
    {children}
  </Container>
);

export default Button;
