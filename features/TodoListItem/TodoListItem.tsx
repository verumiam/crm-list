import {Checkbox} from "@/shared/Checkbox/Checkbox";
import {TodoItemDate} from "@/widgets/TodoItemDate/TodoItemDate";
import TodoItemDescr from "@/widgets/TodoItemDescr/TodoItemDescr";
import styles from './scss/index.module.scss'
import Tag from "@/features/Tag/Tag";
import Image from 'next/image'
import userPhoto from '../../public/photo-user.svg'
import {TodoListItemProps} from "@/features/TodoListItem/types";

export function TodoListItem(
    {
        title,
        descr,
        startDate,
        endDate,
        purpleTag,
        greyTag,
        completed
    }: TodoListItemProps) {

    return (
        <div className={styles.todo_list__item}>
            <div className={styles.todo_list__item_inner}>
                <div className={styles.todo_list__item_header}>
                    <Checkbox completed={completed}/>
                    {title}
                </div>
                <TodoItemDate startDate={startDate} endDate={endDate}/>
                <TodoItemDescr>
                    {descr}
                </TodoItemDescr>
                <div className={styles.todo_list__item_footer}>
                    <div className={styles.todo_list_tags}>
                        <Tag purple>{purpleTag}</Tag>
                        <Tag grey>{greyTag}</Tag>
                    </div>
                    <Image alt={'photo-user'} width={30} height={30} src={userPhoto}/>
                </div>
            </div>
        </div>
    );
}

export default TodoListItem;