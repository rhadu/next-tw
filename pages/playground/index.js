import tw from 'twin.macro'

export default function PlaygroundPage() {
  return (
    <>
      <div tw='h-[600px]  flex flex-col justify-evenly items-center'>
        <div tw='font-normal p-5 text-4xl bg-red-300 '>Hello</div>
        <div tw='font-normal p-5 text-4xl bg-purple-300 '>To</div>
        <div tw='font-normal p-5 text-4xl bg-blue-400 '>The</div>
        <div tw='font-normal p-5 text-4xl bg-yellow-200 '>World</div>
      </div>
    </>
  )
}
