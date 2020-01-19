export interface Storie {
    id: number;
    title: string;
    description?: any;
    resourceURI: string;
    type: string;
    thumbnail?: any;
    characters: Characters;
};

export interface Characters {
    available: number;
    collectionURI: string;
    items: Array<Items>;
    returned: number;
};

export interface Items {
    resourceURI: string;
    name: string;
};
