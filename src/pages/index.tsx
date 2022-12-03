import Button from "../components/button"
import SearchInput from '../components/input/search'
export default function Home() {
  return (
    <div>
      <h1 className='text-center text-primary text-3xl font-bold'>Done</h1>
      <Button name="Create Post" className="w-[163px] h-[36px]"  onClick={()=>{console.log('salom')}} />
      <SearchInput  value="salom" onChange={(e: string)=>{console.log(e)}} />
    </div>
  )
}
