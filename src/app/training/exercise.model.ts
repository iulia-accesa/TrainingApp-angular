export interface Exercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;

}

export const EMPTY_EXERCISE:Exercise = {id:"",name:"",duration:0,calories:0};
