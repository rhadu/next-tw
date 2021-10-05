import tw, { styled } from 'twin.macro'

export default function Quote({ by, source, children }) {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>
      <figcaption>
        <Author>
          <SourceLink href={source}>{by}</SourceLink>
        </Author>
      </figcaption>
    </figure>
  )
}

const QuoteContent = styled.blockquote`
  background-color: hsl(0deg 0% 90%);
  ${tw`px-5 py-4 max-w-xs rounded-lg italic`};
  
  &:before {
    content: '“';
  };

  &:after {
    content: '”';
  };
`
const Author = styled.cite`
  ${tw`block text-right mt-2`} 
`

const SourceLink = styled.a`
  ${tw`text-gray-600 transform duration-500 inline-block`}
  &:before {
    content: '— ';
  };
`