import styled from "styled-components";
import {TodoDescrType} from "@/widgets/TodoItemDescr/types";

const DescrStyled = styled.div`
  height: 20px;
  overflow-y: hidden;
  color: var(--neuteral-black-primary, #555);
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  font-size: 13px;
  font-weight: 400;
  margin-top: 5px;
  line-height: 1.5;
  margin-bottom: 10px;
`

export function TodoItemDescr({children}: TodoDescrType) {
    return (<DescrStyled>
        {children}
    </DescrStyled>);
}

export default TodoItemDescr;
