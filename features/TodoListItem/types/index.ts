export type TodoListItemProps = {
    title?: string;
    descr: string;
    startDate: string;
    endDate: string;
    purpleTag: string | null | undefined;
    greyTag: string | null | undefined;
    completed?: boolean | undefined  | null;
}

export interface CheckboxProps {
    completed: TodoListItemProps["completed"];
}