import { Flex } from '@chakra-ui/react';
import {
  Heart,
  House,
  MagnifyingGlass,
  MapTrifold,
} from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <Flex align='center' justify='space-evenly' w='full' h='80px' p={1} gap={1}>
      <Flex direction='column' align='center' cursor='pointer'>
        <House size={32} color='#363636' weight='light' />
        Início
      </Flex>
      <Flex direction='column' align='center'>
        <MapTrifold size={32} color='#363636' weight='light' />
        Mapa
      </Flex>
      <Flex direction='column' align='center'>
        <MagnifyingGlass size={32} color='#363636' weight='light' />
        Pesquisa
      </Flex>
      <Flex direction='column' align='center'>
        <Heart size={32} color='#363636' weight='light' />
        Favoritos
      </Flex>
    </Flex>
  );
};
