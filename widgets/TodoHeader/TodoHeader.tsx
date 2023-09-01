import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {todoStore} from "@/store/store";

const TodoHeaderStyled = styled.div`
  margin-bottom: 8px;
  display: flex;
  margin-top: 30px;
  padding: 0 4px;
  justify-content: space-between;
`

const TodoHeaderDateStyled = styled.div`
  color: var(--statuses-green, #50B810);
  font-size: 14px;
  font-weight: 600;
`
const TodoHeaderBtnStyled = styled.button`
  border-radius: 6px;
  background: #D0DAEB;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &::after {
    display: block;
    content: '+';
    margin-bottom: 5px;
    border-radius: 5px;
    color: #3D8FEC;
    font-size: 24px;
  }
`
const TodoHeaderCounter = styled.div`
  border-radius: 4px;
  border: 1px solid var(--primary-gray-primary, #7B8AAB);
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 0 5px;
  min-width: 20px;
  justify-content: center;
  display: flex;
`

const TodoHeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const TodoHeader = observer(() => {
    return (
        <TodoHeaderStyled>
            <TodoHeaderDateStyled>
                Today
            </TodoHeaderDateStyled>
            <TodoHeaderWrapper>
                <TodoHeaderBtnStyled/>
                <TodoHeaderCounter>
                    {todoStore.todos.length}
                </TodoHeaderCounter>
            </TodoHeaderWrapper>
        </TodoHeaderStyled>
    );
});


export default TodoHeader
