import Button from "../components/button"
export default function Home() {
  return (
    <div>
      <h1 className='text-center text-primary text-3xl font-bold'>Done</h1>
      <Button name="Create Post" className="w-[163px] h-[36px]"  onClick={()=>{console.log('salom')}} />
    </div>
  )
}
