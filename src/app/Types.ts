export type State = {
    teams: Team[],
    cleaners: Cleaner[]
};

export type Team = {
    id: number;
    name: string;
};

export type Cleaner = {
    id?: number;
    name: string;
    team?: Team;
};
