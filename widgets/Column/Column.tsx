import {ColumnProps} from "@/widgets/Column/types";
import styles from './scss/index.module.scss'
import TodoHeader from "@/widgets/TodoHeader/TodoHeader";
import {useEffect, useRef} from "react";

export function Column({ children, onScrollEnd, isLoading }: ColumnProps & { onScrollEnd: () => void, isLoading: boolean }) {
    const columnInnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = (event: Event) => {
            const target = event.target as HTMLElement;
            const { scrollTop, scrollHeight, clientHeight } = target;

            if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
                onScrollEnd();
            }
        };

        if (columnInnerRef.current) {
            columnInnerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (columnInnerRef.current) {
                columnInnerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [onScrollEnd, isLoading]);

    return (
        <section className={styles.column}>
            <TodoHeader/>
            <div className={styles.column_inner} ref={columnInnerRef}>
                {children}
            </div>
        </section>
    );
}


export default Column;