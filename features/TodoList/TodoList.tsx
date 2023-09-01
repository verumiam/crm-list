import TodoListItem from "@/features/TodoListItem/TodoListItem";
import {todoStore} from "@/store/store";
import {TodoListItemProps} from "@/features/TodoListItem/types";
import {useEffect, useState} from "react";
import {
    generateDescription,
    generateFutureDate,
    generatePastDate,
    generateTag
} from "@/shared/helpers/generateFakeData";
import {reaction} from "mobx";
type TodoListProps = {
    initialFakeData: TodoListItemProps[];
};

export function TodoList({ initialFakeData }: TodoListProps) {
    const [localFakeData, setLocalFakeData] = useState(initialFakeData);

    useEffect(() => {
        const additionalDataLength = todoStore.todos.length - localFakeData.length;
        if (additionalDataLength > 0) {
            const additionalFakeData = Array(additionalDataLength).fill(null).map(() => ({
                descr: generateDescription(),
                endDate: generateFutureDate(),
                startDate: generatePastDate(),
                greyTag: generateTag(),
                purpleTag: generateTag(),
            }));
            setLocalFakeData(prevData => [...prevData, ...additionalFakeData]);
        }
    }, [todoStore.todos.length]);

    return (
        <div>
            {todoStore.todos.map((todo, index) => {
                if (localFakeData[index]) {
                    return (
                        <TodoListItem
                            key={todo.id}
                            descr={localFakeData[index].descr}
                            endDate={localFakeData[index].endDate}
                            startDate={localFakeData[index].startDate}
                            title={todo.title}
                            greyTag={localFakeData[index].greyTag}
                            purpleTag={localFakeData[index].purpleTag}
                            completed={todo.completed}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}
