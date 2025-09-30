import contact from '@/../public/contact.png'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image src={contact} alt="Cake" className="w-60 h-60 rounded-full border-2 border-pinkStrong" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-black font-candyland text-5xl">Agatha Monique</h1>
          <div>
            <p className="text-black font-candyland text-3xl">agatha@gmail.com</p>
            <p className="text-black font-candyland text-3xl">+55 11 99912-1078</p>
          </div>
        </div>
      </div>
    </>
  )
}
