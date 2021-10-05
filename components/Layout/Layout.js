import tw, {styled} from 'twin.macro'

export default function Layout({background, children}) {
  return (
    <Wrapper background={background}>
      {children} 
    </Wrapper>
  )
}

const Wrapper = styled.div(({ background }) => [
  tw`flex flex-col items-center justify-center h-screen bg-white`,
  background === 'gray' && tw`bg-gray-200`
])