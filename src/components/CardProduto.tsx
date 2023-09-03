import { Flex, Image, Text } from '@chakra-ui/react';
import { ProdutoInterface } from '../interfaces/ProdutoInterface';
import { format } from 'date-fns';
import { Heart, IconWeight } from '@phosphor-icons/react';
import { useState } from 'react';

interface CardProdutoProps {
  produto: ProdutoInterface;
}

export const CardProduto = (props: CardProdutoProps) => {
  const [heartState, setHeartState] = useState('light');

  const toggleHeart = () => {
    setHeartState(prevState => prevState === 'fill' ? 'light' : 'fill');
  };

  return (
    <Flex
      direction='row'
      w='full'
      minH='100px'
      background='white'
      p={3}
      gap={1}
      borderRadius='10'
      boxShadow='md'
      alignItems='center'
      justifyContent='center' 
    >
      <Flex justify='center' align='center' paddingRight={4}>
        <Image src={props.produto.foto} maxW='60px' maxH='60px' />
      </Flex>
      <Flex
        direction='column'
        w='full'
        background='white'
        p={1}
        gap={0}
        borderRadius='10'
      >
        <Text fontStyle='bold'>{props.produto.descricao}</Text>
        <Text fontSize='small'>{props.produto.lojista}</Text>
        <Text fontSize='small'>{props.produto.categoria}</Text>
        <Text fontSize='small' color='#AF0D0D'>
          Vencimento - {format(props.produto.vencimento, 'dd/MM/yyyy')}
        </Text>
      </Flex>
       <Heart
          size={32}
          color={heartState === 'fill' ? '#AF0D0D' : '#AF0D0D'}
          weight={heartState as unknown as IconWeight}
          onClick={toggleHeart}
        />
    </Flex>
  );
};
