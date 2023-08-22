import { Flex, Image, Text } from '@chakra-ui/react';
import { ProdutoInterface } from '../interfaces/ProdutoInterface';
import { format } from 'date-fns';
import { Heart } from '@phosphor-icons/react';

interface CardProdutoProps {
  produto: ProdutoInterface;
}

export const CardProduto = (props: CardProdutoProps) => {
  return (
    <Flex
      direction='row'
      w='full'
      minH='100px'
      background='gray.200'
      p={1}
      gap={1}
      borderRadius='10'
      boxShadow='md'
    >
      <Image src={props.produto.foto} maxW='100px' maxH='100px' />
      <Flex
        direction='column'
        w='full'
        background='gray.200'
        p={1}
        gap={0}
        borderRadius='10'
      >
        <Text fontStyle='bold'>{props.produto.descricao}</Text>
        <Text fontSize='small'>{props.produto.lojista}</Text>
        <Text fontSize='small'>{props.produto.categoria}</Text>
        <Text fontSize='small'>
          {format(props.produto.vencimento, 'dd/MM/yyyy')}
        </Text>
      </Flex>
      <Heart
        size={32}
        color={props.produto.favorito ? 'red' : '#0030f0'}
        weight={props.produto.favorito ? 'fill' : 'light'}
      />
    </Flex>
  );
};
