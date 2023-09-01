import styled from "styled-components";
import {TodoDateProps} from "@/widgets/TodoItemDate/types";

const DateStyled = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    color: #50B810;
    font-size: 13px;
    margin-top: 8px;
    font-weight: 600;
  }
`

export function TodoItemDate({startDate, endDate}: TodoDateProps) {
    return (
        <DateStyled>
            <span>
                {startDate}
            </span>
            <span>
                {endDate}
            </span>
        </DateStyled>
    );
}
