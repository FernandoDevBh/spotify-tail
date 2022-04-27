export interface FooterItemHeadProps {
  text: string
}
const FooterItemHead = ({ text }: FooterItemHeadProps ) => (
  <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">{text}</h3>
)

export default FooterItemHead