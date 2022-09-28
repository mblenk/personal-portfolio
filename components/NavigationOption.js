import Link from 'next/link'


export default function NavigationOption({ id, name, duration, menuActive }) {
  return (
    <Link href={id}>
        <a className={`bg-secondary p-2 rounded-xl text-center cursor-pointer drop-shadow-lg border-neon border-4 transition ease-in hover:bg-neon hover:text-secondary duration-100  ${ menuActive ? `transition ease-in translate-x-0 duration-${duration}` : "transition ease-out translate-x-96 duration-1000"}`}>{name}</a>
    </Link>
  )
}
