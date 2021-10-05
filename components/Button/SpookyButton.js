/* components/SpookyButton.js */
import tw, {styled} from 'twin.macro'
import Button from './Button'

const SpookyButton = styled(Button)`
  ${tw`bg-yellow-600 text-black`}
  ${tw`focus-visible:ring-yellow-600`}
  ${tw`hover:bg-yellow-500`}
`;

export default SpookyButton