"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiYourtraveldottv } from "react-icons/si";
import { BiSearchAlt } from "react-icons/bi";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { CgMenu } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import cn from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { set } from "lodash";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import Calender from "react-calendar";
import { DetailFilterType, FilterProps } from "@/interface";
import { SearchFilter } from "./Filter";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailFilterState, filterState } from "@/atom";

const menus = [
  { id: 1, title: "로그인", url: "/users/login" },
  { id: 2, title: "회원가입", url: "/users/signup" },
  { id: 3, title: "FAQ", url: "/faqs" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState);
  const filterValue = useRecoilValue(filterState);
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
              className='underline underline-offset-8 text-gray-500'
            >
              필터닫기
            </button>
          </div>
          <div className='w-[90%] sm:max-w-3xl flex flex-col sm:flex border border-gray-200 rounded-lg py-4 sm:py-0 sm:rouded-full shadiw-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 instet-x-0 mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-4 w-full relative'>
              <button
                type='button'
                onClick={() => setDetailFilter("location")}
                className={cn(
                  "font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left",
                  {
                    "shadow bg-white": detailFilter === "location",
                  }
                )}
              >
                여행지
                <div className='text-gray-500 text-xs'>
                  {filterValue?.location || "여행지 검색"}
                </div>
              </button>
              <button
                type='button'
                onClick={() => setDetailFilter("checkIn")}
                className={cn(
                  "font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left",
                  {
                    "shadow bg-white": detailFilter === "checkIn",
                  }
                )}
              >
                체크인
                <div className='text-gray-500 text-xs'>
                  {filterValue?.checkIn || "날짜 추가"}
                </div>
              </button>
              <button
                type='button'
                onClick={() => setDetailFilter("checkOut")}
                className={cn(
                  "font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left",
                  {
                    "shadow bg-white": detailFilter === "checkOut",
                  }
                )}
              >
                체크아웃
                <div className='text-gray-500 text-xs'>
                  {filterValue?.checkOut || "날짜 추가"}
                </div>
              </button>
              <button
                type='button'
                onClick={() => setDetailFilter("guest")}
                className={cn(
                  "font-semibold text-xs rounded-full hover:bg-gray-100 py-3 px-6 text-left",
                  {
                    "shadow bg-white": detailFilter === "guest",
                  }
                )}
              >
                여행자
                <div className='text-gray-500 text-xs'>
                  {`${filterValue?.guest} 명` || "게스트 추가"}
                </div>
              </button>
              <SearchFilter />
            </div>
            <div>
              <button
                type='button'
                className='bg-rose-600 text-white rounded-full h-10 mx-4 sm:w-24  my-auto flex justify-center gap-1 px-3 py-2 hover:shadow hover:bg-rose-500'
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

      <div className='grow basis-0 hidden md:flex gap-4 align-middle justify-end relative'>
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
interface FilterComponentProps {
  filterValue: FilterProps;
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>;
  setDetailFilter: React.Dispatch<
    React.SetStateAction<DetailFilterType | null>
  >;
}

const LocationFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  return (
    <div className='absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl rounded-xl left-0'>
      <div className='text-sm font-semibold'>지역으로 검색하기</div>
      <div className='flex flex-wrap gap-4 mt-4'>
        {["서울", "대전", "인천", "대구", "부산", "울산"]?.map((value) => (
          <button
            key={value}
            type='button'
            className={cn(
              "border rounded-lg px-5 py-2.5 hover:bg-gray-200 focus:bg-rose-500",
              { "bg-rose-600 text-white": filterValue.location === value }
            )}
            onClick={() => {
              setFilterValue({ ...filterValue, location: value });
              setDetailFilter("checkIn");
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
const CheckInFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  const onChange = (e: any) => {
    setFilterValue({ ...filterValue, checkIn: dayjs(e).format("YYYY-MM-DD") });
    setDetailFilter("checkOut");
  };
  return (
    <div className='ansolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl rounded-xl left-0'>
      <div className='text-sm font-semibold'>체크인 날짜 설정하기</div>
      <Calender
        className='mt-8 mx-auto'
        onChange={onChange}
        minDate={new Date()}
        defaultValue={
          filterValue.checkIn ? new Date(filterValue.checkIn) : null
        }
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
    </div>
  );
};
const CheckOutFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  const onChange = (e: any) => {
    setFilterValue({ ...filterValue, checkOut: dayjs(e).format("YYYY-MM-DD") });
    setDetailFilter("guest");
  };
  return (
    <div className='ansolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl md:-w[780px] rounded-xl left-0'>
      <div className='text-sm font-semibold'>체크아웃 날짜 설정하기</div>
      <Calender
        className='mt-8 mx-auto'
        onChange={onChange}
        minDate={
          filterValue.checkIn ? new Date(filterValue.checkIn) : new Date()
        }
        defaultValue={
          filterValue.checkIn ? new Date(filterValue.checkIn) : null
        }
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
    </div>
  );
};
const GuestFilter = ({
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  const [counter, setCounter] = useState<number>(filterValue.guest || 0);
  return (
    <div className='absolute top-76 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl rounded-xl left-0'>
      <div className='text-sm font-semibold'>게스트 수 추가하기</div>
      <div className='mt-4 border-gray-200 rounded-lg py-2 px-4 flex justify-between items-center'>
        <div>
          <div className='font-semi-bold text-sm'>게스트 수 추가</div>
          <div className='text-gray-500 text-xs'>숙박 인원을 입력해주세요.</div>
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <button
            type='button'
            className='rounded-full border border-gray-200 w-8 h-8 disabled:border-gray-200 hover:border-black'
            disabled={counter <= 0}
            onClick={() => {
              setCounter((val) => val - 1);
              setFilterValue({ ...filterValue, guest: counter - 1 });
            }}
          >
            <AiOutlineMinusCircle
              className={cn("m-auto", { "text-gray-200": counter <= 0 })}
            />
          </button>
          <div className='w-3 text-center'>{counter}</div>
          <button
            type='button'
            className='rounded-full border border-gray-400 w-8 h-8 disabled:border-gray-200 hover:border-black'
            disabled={counter >= 20}
            onClick={() => {
              setCounter((val) => val - 1);
              setFilterValue({ ...filterValue, guest: counter + 1 });
            }}
          >
            <AiOutlinePlusCircle
              className={cn("m-auto", { "text-gray-200": counter >= 20 })}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
