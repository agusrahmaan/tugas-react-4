import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import KoreanDrama from './components/KoreanDrama'
import './App.css'

function App() {
  const kdrama = [
    {
        id: 1,
        nama: "The K2",
        gambar: "https://s1.makimbo.xyz/wp-content/uploads/2022/04/film-the-k2-2016-lk21-d21.jpg",
        genre: "Action, Romance",
        synopsys: "Kim Je Ha adalah mantan tentara yang disewa. Dia juga disebut K2. Ia dipekerjakan sebagai pengawal oleh Choi Yoo Jin. Choi Yoo Jin adalah istri Jang Se Joon, yang mencalonkan diri sebagai presiden. Sementara itu, Go Anna adalah putri tidak sah yang tertutup dari Jang Se Joon yang harus dijaga Je Ha."
    },
    {
        id: 2,
        nama: "Blind",
        gambar: "https://s2.makimbo.xyz/wp-content/uploads/2022/09/film-blind-2022-lk21-d21.jpg",
        genre: "Action, Crime, Mystery",
        synopsys: "Sebuah cerita tentang orang-orang yang telah menjadi korban ketidakadilan karena mereka adalah pelaku biasa dan biasa yang telah memperhatikan kebenaran yang tidak nyaman."
    },
    {
        id: 3,
        nama: "Twenty Five Twenty One",
        gambar: "https://s7.makimbo.xyz/wp-content/uploads/2022/02/film-twenty-five-twenty-one-2022-lk21-d21.jpg",
        genre: "Drama, Romance",
        synopsys: "Pada saat mimpi tampak di luar jangkauan, seorang atlet anggar remaja mengejar ambisi besar dan bertemu dengan seorang pemuda pekerja keras yang berusaha membangun kembali hidupnya."
    },
    {
        id: 4,
        nama: "Taxi Driver",
        gambar: "https://s6.makimbo.xyz/wp-content/uploads/2021/11/film-taxi-driver-mobeomtaeksi-2021-d21.jpg",
        genre: "Action, Crime",
        synopsys: "Kisah seorang sopir taksi mewah yang membalas dendam atas nama penumpangnya. Hal ini didasarkan pada webtoon Deluxe Taxi oleh Carlos dan Lee Jae-jin."
    },
    {
        id: 5,
        nama: "Bloodhounds",
        gambar: "https://s6.makimbo.xyz/wp-content/uploads/2023/06/film-bloodhounds-2023-lk21-d21.jpg",
        genre: "Action, Crime",
        synopsys: "Untuk melunasi hutang mereka, tiga pemuda pemberani terjun ke bisnis peminjaman uang sambil menghadapi orang kaya dan berkuasa yang memangsa yang lemah."
    }
]
  return (
    <div className='style-app'>
      {
        kdrama.map((value) => {
          return <KoreanDrama key={value.id} nama={value.nama} gambar={value.gambar} genre={value.genre} synopsys={value.synopsys} />
        })
      }
    </div>
  )
}

export default App
