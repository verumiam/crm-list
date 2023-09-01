export type TagStyledProps = {
    purple?: boolean;
    grey?: boolean;
}

export type TagProps = TagStyledProps & {
    children?: React.ReactNode;
};