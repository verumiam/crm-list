import styled from "styled-components";
import {CheckboxProps} from "@/features/TodoListItem/types";

interface StyledProps {
    checked?: boolean;
}

const CheckboxStyled = styled.input<StyledProps>`
  ${props => props.checked && `
      float: left;
      margin: 3px 5px 0 0;
  `};
`;

export function Checkbox({completed}: CheckboxProps) {
    return (
        <CheckboxStyled type='checkbox' checked={!!completed}/>
    );
}
