export interface MyObject {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Results>;
}

export interface Results {
    id: number;
    name: string;
    description?: any;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    stories: Stories;
}

export interface Thumbnail {
    path: string;
    extension: string;
}


export interface Stories {
    available: number;
    collectionURI: string;
    items: Array<Items>;
    returned: number;
}

export interface Items {
    resourceURI: string;
    name: string;
}
