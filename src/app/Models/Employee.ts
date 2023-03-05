import { Vacation } from "./Vacation";

export interface Employee {
    id: number;
    name: string;
    created: Date;
    vacations: Vacation[]
}