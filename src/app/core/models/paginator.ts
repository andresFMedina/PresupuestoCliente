export interface Paginator<T> {
    currentPage: number;
    registerPerPages: number;
    totalRegister: number;
    totalPages: number;
    currentFilter: string;
    result: T[];
}
