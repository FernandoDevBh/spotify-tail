export interface FooterItemProps {
  children: React.ReactNode,
  className?: string
  override?: boolean
}

const FooterItem = ({ children, className, override }: FooterItemProps) => (
  <div className={!override ?`md:col-span-1 pt-10 md:pt-4 ${className}` : className}>
    {children}
  </div>
)

export default FooterItem