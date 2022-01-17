import Link from 'next/link'

function Footer() {
  return (
    <div className="text-center bg-dark p-2 text-white">
      &copy; 2022 | All Rights Reserved | <Link href="/" passHref>Home</Link> | <Link href="/about" passHref>About</Link> | <Link href="/contact" passHref>Contact</Link> 
    </div>
  )
}

export default Footer
