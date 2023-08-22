import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Flex
        direction='column'
        w='100%'
        h='100vh'
        align='center'
        backgroundColor='gray'
      >
        <Flex
          direction='column'
          w='100%'
          maxW='480px'
          h='100vh'
          backgroundColor='silver'
        >
          <Header />
          <Home />
          <Footer />
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
