//sin la extension de paste JSON as Code
export interface Movie {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}

export interface ApiResponse{
    data: {Search: Movie[];}
}