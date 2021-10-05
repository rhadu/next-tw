import tw, {styled} from "twin.macro";

const Button = ({ variant, size, mood, children, className, ...props}) => {
  return (
    <ButtonElement variant={variant} size={size} mood={mood} className={className} {...props}>
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button(({variant, size, mood})=>[
  //default styles
  tw`font-sans font-medium rounded  border-2 border-transparent focus:outline-none transition-colors duration-300`,

  tw`focus-visible:(transform duration-75 ring-2 ring-offset-2)`,

  tw`active:shadow-inner`,
 
  size === 'small' &&  tw`px-4 py-2 text-base leading-tight`,
  
  size === 'medium' && tw`px-6 py-4 text-lg leading-snug`,

  size === 'large' && tw`px-9 py-5 text-xl leading-normal`,

  variant === 'fill' && [
    tw`bg-blue-700 text-white`,
    mood === 'danger' && tw`bg-red-700`,

    tw`hover:bg-blue-600`,
    mood === 'danger' && tw`hover:bg-red-600 `,

    tw`focus-visible:ring-blue-700`,
    mood === 'danger'&& tw`focus-visible:ring-red-700`,
  ],

  variant === 'outline' && [
    tw`bg-white text-blue-700 border-blue-700`,
    mood === 'danger' && tw`text-red-700 border-red-700`,

    tw`hover:bg-gray-100`,
    
    tw`focus-visible:ring-blue-700`,
    mood === 'danger' && tw`focus-visible:ring-red-700`,

  ],

  variant === 'ghost' && [
    tw`text-gray-500`,
    tw`hover:(bg-gray-300 text-black)`,
    tw`focus-visible:ring-gray-400`
  ]
])

export default Button;
