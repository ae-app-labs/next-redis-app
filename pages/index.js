import Head from 'next/head'
import Image from 'next/image'
import CarForm from '../lib/CarForm'
import SearchForm from '../lib/SearchForm'


export default function Home() {
  return (
    <div className="container">
      <h1 className='is-size-1'>Create a Car</h1>
      <CarForm />

      <h1 className='is-size-1'>Find a Car</h1>
      <SearchForm />
    </div>
  )
}
