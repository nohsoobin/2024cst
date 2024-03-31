"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiYourtraveldottv } from "react-icons/si";
import { BiSearchAlt } from "react-icons/bi";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { CgMenu } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import cn from "classnames";

const menus = [
  { id: 1, title: "로그인", url: "/users/login" },
  { id: 2, title: "회원가입", url: "/users/signup" },
  { id: 3, title: "FAQ", url: "/faqs" },
];
type DetailFilterType = "location" | "checkIn" | "checkOut" | "guest";
interface FilterProps {
  location: string;
  checkIn: string;
  checkOut: string;
  guest: number;
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [detailFilter, setDetailFilter] = useState<null | DetailFilterType>(
    null
  );

  const [filterValue, setFilterValue] = useState<FilterProps>({
    location: "",
    checkIn: "",
    checkOut: "",
    guest: 0,
  });

  const router = useRouter();
  return (
    <nav
      className={cn(
        "z-[20] border border-b-gray-20 w-full shadow-sm p-4 sm:px-10 flex justify-between items-center align-middle fixed top-0 bg-white",
        {
          "!h-44": showFilter === true,
          "!items-start": showFilter === true,
        }
      )}
    >
      <div className='grow basis-0 hidden font-semibold text-lg sm:text-xl text-rose-500 cursor-pointer sm:flex sm:gap-2'>
        <SiYourtraveldottv className='text-4xl' />
        <div className='my-auto'>Honey sleep</div>
      </div>
      {showFilter === false ? (
        <div className='w-full sm:w-[340px] border py-2.5 border-gray-200 rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2'>
          <div
            role='presentation'
            className='flex justify-center gap-1 cursor-pointer'
            onClick={() => setShowFilter(true)}
          >
            <div className='my-auto font-semibold text-sm'>어디든지</div>
            <LiaGripLinesVerticalSolid className='text-gray-200 my-auto text-2xl' />
            <div className='my-auto font-semibold text-sm'>언제든</div>
            <LiaGripLinesVerticalSolid className='text-gray-200 my-auto text-2xl' />
            <div className='my-auto font-semibold text-sm'>게스트</div>
            <LiaGripLinesVerticalSolid className='text-gray-200 my-auto text-2xl' />
          </div>
          <button
            type='button'
            onClick={() => setShowFilter(true)}
            className='bg-rose-500 text-white rounded-full w-8 h-8 my-auto'
          >
            <BiSearchAlt className='text-lg m-auto font-semibold' />
          </button>
        </div>
      ) : (
        <div className='sm:w-[340px] cursor-pointer w-full relative'>
          <div className='flex justify-center gap-7 h-14 text-center items-center'>
            <button
              type='button'
              onClick={() => window.alert("서비스 준비 중")}
              className='font-semibold underline underline-offset-8'
            >
              숙소
            </button>
            <button type='button' className='text-gray-700'>
              체험
            </button>
            <button type='button' className='text-gray-700'>
              온라인 체험
            </button>
            <button
              type='button'
              onClick={() => setShowFilter(false)}
              className='font-semibold underline underline-offset-8 text-gray-500'
            >
              필터닫기
            </button>
          </div>
          <div className='w-[90%] sm:max-w-3xl flex flex-col sm:flex border border-gray-200 rounded-lg py-4 sm:py-0 sm:rouded-full shadiw-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 instet-x-0 mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-4 w-full relative'>
              <button type='button'>여행지</button>
              <button type='button'>체크인</button>
              <button type='button'>체크아웃</button>
              <button type='button'>여행자</button>
            </div>
            <div>
              <button
                type='button'
                className='bg-rose-600 text-white rounded-full h-10 mx-4 sm:w-24 my-auto flex justify-center gap-1 px-3 py-2 hover:shadow hover:bg-rose-500'
                onClick={() => {
                  setShowFilter(false);
                  setDetailFilter(null);
                }}
              >
                <BiSearchAlt className='font-semibold text-xl my-auto' />
                <div className='my-auto'>검색</div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='grow basis-0 hidden sm:flex gap-4 align-middle justify-end relative'>
        <button
          type='button'
          className=' font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-gray-50'
        >
          당신의 공간을 등록해주세요.
        </button>
        <button
          type='button'
          onClick={() => setShowMenu((val) => !val)}
          className='flex-align-middle gap-3 rounded-full border border-gray-20 shadow-sm px-4 py-3 my-auto hover:shadoww-lg'
        >
          <CgMenu />
          <BiUser />
        </button>
        {showMenu && (
          <div className='border border-gray-200 shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg'>
            {menus?.map((menu) => (
              <button
                type='button'
                key={menu.id}
                className='h-10 hover:bg-gray-50 pl-3 text-sm text-gray-700 text-left'
                onClick={() => router.push(menu.url)}
              >
                {menu.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
