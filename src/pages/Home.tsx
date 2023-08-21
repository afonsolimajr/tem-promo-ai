import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { produtosDataList } from '../data/produtosData';
import { CardProduto } from '../components/CardProduto';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { categoriasDataList } from '../data/categoriasData';
import { useState } from 'react';

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
    <Flex direction='column' w='100%' maxW='480px' h='100vh' p={1}>
      <Flex>
        <InputGroup>
          <Input
            placeholder='O que você deseja hoje?'
            value={textoPesquisa}
            onChange={(e) => {
              setTextoPesquisa(e.currentTarget.value);
            }}
          />
          <InputRightElement>
            <MagnifyingGlass size={24} color='gray' />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Flex
        align='center'
        w='full'
        minH='50px'
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
            background: 'gray',
            borderRadius: '25px',
          },
        }}
      >
        {categorias.map((c) => (
          <Flex
            justify='center'
            align='center'
            minW='100px'
            h='40px'
            background={categoria == c ? 'red.200' : 'white'}
            border='1px solid red'
            borderRadius={5}
            onClick={() => {
              categoria == c ? setCategoria('') : setCategoria(c);
            }}
          >
            {c}
          </Flex>
        ))}
      </Flex>
      <Flex
        align='center'
        w='full'
        minH='160px'
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
            background: 'gray',
            borderRadius: '25px',
          },
        }}
      >
        <Image src='./banners/bannerAssai.png' w='auto' h='150px' />
        <Image src='./banners/bannerCarrefour.png' w='auto' h='150px' />
        <Image src='./banners/bannerAssai.png' w='auto' h='150px' />
      </Flex>
      <VStack p={1} overflowY='auto'>
        {produtos().map((p) => (
          <CardProduto key={p.id} produto={p} />
        ))}
      </VStack>
    </Flex>
  );
};
