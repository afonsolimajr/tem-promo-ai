import { useState } from 'react';
import {
  Flex,
  VStack,
} from '@chakra-ui/react';
import { produtosDataList } from '../data/produtosData';
import { CardProduto } from '../components/CardProduto';

import { categoriasDataList } from '../data/categoriasData';
import { InputPesquisa } from '../components/InputPesquisa';
import { CarrosselBanners } from '../components/CarrosselBanners';

export const Home = () => {
  const [categoria, setCategoria] = useState('');
  const [textoPesquisa, setTextoPesquisa] = useState('');

  const produtos = () => {
    let retorno = produtosDataList;

    if (categoria != '') {
      retorno = retorno.filter((produto) => produto.categoria == categoria);
    }

     if (textoPesquisa != '') {
      retorno = retorno.filter((produto) =>
        produto.descricao.toLowerCase().includes(textoPesquisa.toLowerCase())
      );
    }

    return retorno;
  };

  const categorias = categoriasDataList;
  return (
    <Flex
      direction='column'
      w='100%'
      maxW='480px'
      h='100vh'
      p={3}
      bg={'white'}
      overflowY='auto'
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#C9C9C9',
          borderRadius: '25px',
        },
      }}
    >
      <InputPesquisa texto={textoPesquisa} valorTexto={setTextoPesquisa} />
      <Flex
        align='center'
        w='full'
        minH='60px'
        gap={1}
        overflowY='auto'
        overflowX='auto'
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#C9C9C9',
            borderRadius: '25px',
          },
        }}
      >
        {categorias.map((item) => (
          <Flex
            justify='center'
            align='center'
            minW='100px'
            h='40px'
            background={categoria == item ? '#AF0D0D' : 'white'}
            color={categoria == item ? 'white' : 'gray'}
            border='1px solid #AF0D0D'
            borderRadius={5}
            onClick={() => {
              categoria == item ? setCategoria('') : setCategoria(item);
            }}
            css={{
              ':hover': {
              cursor: 'pointer',
              }
            }}
          >
            {item}
          </Flex>
        ))}
      </Flex>

      <VStack
        p={1}
        overflowY='auto'
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#C9C9C9',
            borderRadius: '25px',
          },
        }}
      >
        <CarrosselBanners />
        {produtos().map((valor) => (
          <CardProduto key={valor.id} produto={valor} />
        ))}
      </VStack>
    </Flex>
  );
};
