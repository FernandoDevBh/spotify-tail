
interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <a href="/" className="bg-green-main hover:bg-white text-purple-main
                           text-sm rounded-full
                           px-10 py-3 uppercase font-bold
                           max-w-xl mx-auto tracking-widest
                           transition duration-500">
    {text}
  </a>
)

export default Button