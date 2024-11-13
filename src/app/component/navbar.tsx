import Link from 'next/link';
export default function Navbar(){
    return (
        <div className="flex flex-row... justify-end ml-1 p-3 rounded-lg font-bold bg-cyan-400">
            
        <div className='ml-2 p-1.5 hover:text-white'><Link href='/'>Home</Link></div>
        
        <div className='ml-2 p-1.5 hover:text-white'><Link href='/About_Me'>About_Me </Link></div>

         <div className='ml-2 p-1.5 hover:text-white'><Link href='/Career'>Career </Link></div> 

          <div className='ml-2 p-1.5 hover:text-white'>  <Link href='/Skills'>Skills </Link></div> 

           <div className='ml-2 p-1.5 hover:text-white'> <Link href='/Contact'>Contact </Link></div>
     
        </div>
    )
}