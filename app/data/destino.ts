
//estamos definindo a estrutura dos dados que vão ser utilizado 
// na nossa aplicação 
export interface Destino {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

//aqui vamos criar o array de destino e vamos listar eles aqui dentro 

export const destinos: Destino[] = [
    {
        id: 1,
        nome: "Estados Unidos",
        descricao: "Conheça os Estados Unidos, um país repleto de diversidade cultural, paisagens deslumbrantes e cidades icônicas. Explore Nova York, Los Angeles, Miami e muito mais.",
        preco: 2500,
        imagem: "/imagens/eua.jpg"
    },
    {
        id: 2,
        nome: "Irlanda",
        descricao: "Descubra a beleza natural e a rica cultura da Irlanda, conhecida por suas paisagens deslumbrantes, tradições encantadoras e animada vida urbana.",
        preco: 1800,
        imagem: "/imagens/irlanda.jpg"
    },

{
    id: 3,
    nome: "Italia",
    descricao: "Desfrute da cultura rica e das paisagens deslumbrantes da Itália, conhecida por suas cidades históricas, arte renascentista e culinária deliciosa.",
    preco: 2000,
    imagem: "/imagens/italia.jpg"    
}

];
