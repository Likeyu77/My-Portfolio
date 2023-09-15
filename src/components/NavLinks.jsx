import { links } from '../data'
const NavLinks = ({ activeLink, setActiveLink }) => {
  return (
    <>
      {links.map((link) => {
        const { id, href, text } = link
        return (
          <a
            href={href}
            key={id}
            className={`capitalize btn hover:btn-primary text-lg bg-transparent border-0 ${
              text === activeLink ? 'text-primary ' : ''
            }`}
            onClick={() => setActiveLink(text)}>
            {text}
          </a>
        )
      })}
    </>
  )
}

export default NavLinks
