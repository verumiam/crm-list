import styled from "styled-components";
import {TagProps, TagStyledProps} from "@/features/Tag/types";

const TagStyled = styled.div<TagStyledProps>`
  ${props => props.purple && `
    background: var(--statuses-entity-tag, #B233A6);
    color: white;
    border-radius: 4px;
    width: auto;
    min-width: auto;
    font-size: 12px;
    font-weight: 600;
    padding: 1px 6px 2px 6px;
    height: 20px;
  `};

  ${props => props.grey && `
    color: var(--primary-gray-dark, #616C82);
    font-size: 12px;
    font-weight: 600;
    width: auto;
    border-radius: 3px;
    padding: 1px 0px 2px 6px;
    border-radius: 4px 0px 0px 4px;
    background: var(--neuteral-gray-20, #EBEEF6);
    height: 20px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 10px; /* Размеры треугольника */
        border-color: transparent transparent transparent var(--neuteral-gray-20, #EBEEF6);
        transform: translateY(-50%);
    }
`};
`;

export function Tag({children, ...props}: TagProps) {
    return (
        <TagStyled {...props}>
            {children}
        </TagStyled>
    );
}

export default Tag;