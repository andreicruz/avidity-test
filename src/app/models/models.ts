export interface Character {
    id: number;
    name: string;
    description?: any;
    thumbnail: Thumbnail;
    resourceURI: string;
    stories: Stories;
};

export interface Thumbnail {
    path: string;
    extension: string;
};

export interface Stories {
    available: number;
    collectionURI: string;
    items: Array<Items>;
    returned: number;
};

export interface Items {
    resourceURI: string;
    name: string;
};