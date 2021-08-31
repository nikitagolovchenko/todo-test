import styled, { css } from 'styled-components';

const headingCss = css`
  margin: 0 0 ${(props) => props.theme.spacing[2]};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const H1 = styled.h1`
  ${headingCss}
`;

export const H2 = styled.h2`
  ${headingCss}
`;

export const H3 = styled.h3`
  ${headingCss}
`;

interface ParagraphProps {
  fw?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0 0 ${(props) => props.theme.spacing[1]};
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleBlock = styled.div`
  text-align: center;
  padding: 30px 0;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.dark};
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  outline: none;
  transition: border-color ${(props) => props.theme.transition.duration} ${(props) => props.theme.transition.easing};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

interface ButtonProps {
  variant: string;
  circle?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  vertical-align: top;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  transition: color ${props => props.theme.transition.duration} ${props => props.theme.transition.easing}, background-color ${props => props.theme.transition.duration} ${props => props.theme.transition.easing}, border-color ${props => props.theme.transition.duration} ${props => props.theme.transition.easing};
  border: 2px solid ${props => props.variant === 'primary' ? props.theme.colors.primary : props.variant === 'secondary' ? props.theme.colors.secondary : 'transparent'};
  background-color: ${props => props.variant === 'primary' ? props.theme.colors.primary : props.variant === 'secondary' ? props.theme.colors.secondary : 'transparent'};
  color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${props => props.variant === 'primary' ? props.theme.colors.primaryDark : props.variant === 'secondary' ? props.theme.colors.secondaryDark : 'transparent'};
    background-color: ${props => props.variant === 'primary' ? props.theme.colors.primaryDark : props.variant === 'secondary' ? props.theme.colors.secondaryDark : 'transparent'};
  }

  ${props => props.circle ? {
    padding: 0,
    width: props.theme.spacing[4],
    height: props.theme.spacing[4],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  } : null};
`;
