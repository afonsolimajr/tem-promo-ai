import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export interface InputPesquisaProps {
  texto: string;
  valorTexto: (value: string) => void;
}

export const InputPesquisa = ({ texto, valorTexto }: InputPesquisaProps) => {
  return (
    <Flex
      paddingTop={2}
      paddingBottom={2}
      bg={'white'}
    >
      <InputGroup>
        <Input
          placeholder='O que você deseja hoje?'
          value={texto}
          onChange={(e) => {
            valorTexto(e.currentTarget.value);
          }}
          _focus={{
            borderColor: '#AF0D0D',
            boxShadow: 'none',
        }}
        />
        <InputRightElement>
          <MagnifyingGlass size={24} color='gray' />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
};