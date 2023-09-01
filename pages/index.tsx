import Column from "@/widgets/Column/Column";
import {TodoList} from "@/features/TodoList/TodoList";
import axios from "axios";
import {todoStore} from "@/store/store";
import {
    generateDescription,
    generateFutureDate,
    generatePastDate,
    generateTag
} from "@/shared/helpers/generateFakeData";
import {TodoListItemProps} from "@/features/TodoListItem/types";
import {useCallback, useEffect, useRef, useState} from "react";

type TodosType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}[]

type HomeProps = {
    todos: TodosType;
    fakeData: TodoListItemProps[]
}

export default function Home(
    {
        todos,
        fakeData
    }: HomeProps) {

    todoStore.initialize(todos);

    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);

    const loadMoreData = useCallback(async () => {
        if (loading) return;

        setLoading(true);
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}`);
            const newTodos = result.data;
            todoStore.initialize([...todoStore.todos, ...newTodos]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
        setLoading(false);
    }, [page, loading]);

    return (
        <Column onScrollEnd={loadMoreData} isLoading={loading}>
            <TodoList initialFakeData={fakeData}/>
        </Column>
    );
}

export async function getStaticProps() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos?_page=1');
    const todos = result.data;

    const fakeData = todos.map(() => ({
        descr: generateDescription(),
        endDate: generateFutureDate(),
        startDate: generatePastDate(),
        greyTag: generateTag(),
        purpleTag: generateTag(),
    }));

    return {
        props: { todos, fakeData }
    };
}
