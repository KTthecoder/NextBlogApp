import Link from "next/link"

type Props = {
    link: String,
    title: String,
    color: 'blue' | 'red'
}

export default function MainButton({ link, title, color }: Props) {
  return (
    <Link  className={`${color == 'blue' ? 'bg-blue-500 hover:bg-blue-600' : color == 'red' ? 'bg-red-500 hover:bg-red-600' : null} 
    rounded-md px-8 py-2 tracking-wide text-base box-border transition-all duration-500 shadow-sm hover:rounded-xl text-white`} 
    href={link.toLocaleLowerCase()}>{title}</Link>
  )
}