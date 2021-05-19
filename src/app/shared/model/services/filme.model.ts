export interface Filme {
    id: number;
    nome: string;
    ano: number;
    diretor: string;
    genero: string;
    descricao: string;
    pôster:  [
        {url: "/assets/imagens/007 um novo dia para morrer.jpg"},
        {url: "/assets/imagens/+velozes +furiosos.jpg"},
        {url: "/assets/imagens/60 segundos.jpg"},
        {url: "/assets/imagens/Harry Potter Azkaban.jpg"},
    ]
}