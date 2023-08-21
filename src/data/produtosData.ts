import { ProdutoInterface } from '../interfaces/ProdutoInterface';

const imagemPadrao =
  'https://www.casamagalhaes.com.br/blog/wp-content/uploads/2019/07/DESCUBRA-COMO-CRIAR-UM-MIX-DE-PRODUTOS-IDEAL-PARA-O-SEU-SUPERMERCADO-1.jpg';

export const produtosDataList: ProdutoInterface[] = [
  {
    id: '1',
    descricao: 'Arroz',
    vencimento: new Date('2023-09-30'),
    lojista: 'Supermercado A',
    foto: 'https://propao.agilecdn.com.br/4413_1.jpg?v=27-246342608',
    categoria: 'Grãos',
  },
  {
    id: '2',
    descricao: 'Feijão',
    vencimento: new Date('2023-10-15'),
    lojista: 'Supermercado B',
    foto: imagemPadrao,
    categoria: 'Grãos',
  },
  {
    id: '3',
    descricao: 'Macarrão',
    vencimento: new Date('2023-08-25'),
    lojista: 'Supermercado C',
    foto: imagemPadrao,
    categoria: 'Massas',
  },
  {
    id: '4',
    descricao: 'Leite',
    vencimento: new Date('2023-09-10'),
    lojista: 'Supermercado D',
    foto: imagemPadrao,
    categoria: 'Laticínios',
  },
  {
    id: '5',
    descricao: 'Ovos',
    vencimento: new Date('2023-08-28'),
    lojista: 'Supermercado A',
    foto: imagemPadrao,
    categoria: 'Laticínios',
  },
  {
    id: '6',
    descricao: 'Pão',
    vencimento: new Date('2023-08-26'),
    lojista: 'Supermercado B',
    foto: imagemPadrao,
    categoria: 'Padaria',
  },
  {
    id: '7',
    descricao: 'Banana',
    vencimento: new Date('2023-08-23'),
    lojista: 'Supermercado C',
    foto: imagemPadrao,
    categoria: 'Frutas',
  },
  {
    id: '8',
    descricao: 'Maçã',
    vencimento: new Date('2023-08-30'),
    lojista: 'Supermercado D',
    foto: imagemPadrao,
    categoria: 'Frutas',
  },
  {
    id: '9',
    descricao: 'Carne',
    vencimento: new Date('2023-08-29'),
    lojista: 'Supermercado A',
    foto: imagemPadrao,
    categoria: 'Carnes',
  },
  {
    id: '10',
    descricao: 'Peixe',
    vencimento: new Date('2023-08-27'),
    lojista: 'Supermercado B',
    foto: imagemPadrao,
    categoria: 'Peixes',
  },
];
