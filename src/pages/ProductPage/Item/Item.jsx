import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ProductPage = () => {
  // useLocation을 사용해 값을 주고 받기
  const location = useLocation()
  const { period, title, content, price, status, src } = location.state || {}
  const navigate = useNavigate()
  return (
    <div className='w-full h-full flex items-center justify-center font-Pretendard'>
      <div 
        className='m-3 shadow-md text-start font-Pretendard rounded-md border-2 '>
       {/* 상품 이미지 */}
       <div className="justify-center flex">
        <img className="w-[350px] h-[350px] object-cover rounded-t-md" src={src} />
       </div>
      </div>
      <div className='flex flex-col  px-10 '>
        <button
        onClick={() => navigate('/')} 
        className=' text-md text-slate-600 font-semibord py-2 border-2 
        border-slate-400 rounded-md px-10 my-5'>
          Back To All Products</button>


          <div className='flex justify-between'>
          <div className='inline-block'>
            <div className='flex items-center gap-2 border-2 px-2
            my-2 justify-center rounded-2xl text-slate-700 border-slate-500'>
             <p className="font-medium text-sm">{status}</p>
              {/* 예약 가능 상태 */}
              {status == '예약 가능' && (
              <p className="w-3 h-3 rounded-2xl bg-green-300"></p>)}
              {/* 예약 중 상태 */}
              {status == '예약 중' && (
              <p className="w-3 h-3 rounded-2xl bg-amber-500"></p>)}
              {/* 렌탈 중 상태 */}
              {status == '렌탈 중' && (
              <p className="w-3 h-3 rounded-2xl bg-rose-600"></p>)}
            </div>
            </div>
            </div>
            <div className='text-gray-800 font-bold text-3xl py-2'>{title}</div>
            <span>{price}원/{period}</span>
            <span>{content}</span>


            <button className='bg-indigo-400 text-lg text-white font-semibord py-2 border-2 
        border-indigo-300  rounded-3xl px-10 my-20'>
          채팅하기</button>

      </div>
    </div>
  )
}

export default ProductPage