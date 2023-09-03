import { Flex, Image } from "@chakra-ui/react"

export const CarrosselBanners = () => {
  return (
       <Flex
          align='center'
          w='full'
          minH='170px'
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
          <Image src='../../public/banners/bannerAssai.png' w='auto' h='150px' />
          <Image src='../../public/banners/bannerCarrefour.png' w='auto' h='150px' />
          <Image src='../../public/banners/bannerAssai.png' w='auto' h='150px' />
        </Flex>
  )
}