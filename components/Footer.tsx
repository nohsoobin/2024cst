export default function Footer() {
  return (
    <footer className='bg-gray-50 py-2'>
      <div className='max-w-screen-xl w-full mx-auto p-4 nd:flex md:items-center md:justify-between border-b-gray-200 border-b'>
        <div className='text-sm text-gray-800 sm:text-center'>
          © 2024 <span className='hover:underline'>Honey Sleep, Inc.</span>
        </div>
      </div>
      <ul className='flex flex-wrap gap-4 md:gap-6 items-center text-sm text-gray-800 mt-2 sm:mt-0'>
        <li>
          <a href='#' className='hover:underline'>
            개인정보 처리방침
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            이용약관
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            공지사항
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            회사 세부정보
          </a>
        </li>
      </ul>
      <div className='text-[10px] text-gray-400 mx-auto p-4 max-w-screen-xl'>
        회사소개 강사지원 채용안내 인재추천 FAST CAMPUS (주) 데이원컴퍼니 올해의
        브랜드 대상 2021올해를 빛낸 브랜드 대상 2021 대표이사: 이강민
        개인정보책임관리자: 이강민 사업자번호 : 810-86-00658 사무실 : 서울특별시
        강남구 테헤란로 231, 센터필드 WEST 6층, 7층 교육장 : 서울특별시 강남구
        강남대로 364 미왕빌딩 10, 11층 이용약관 개인정보처리방침 FAQ 취소/환불
        정책 자료실 공지사항 장학프로그램 고객센터 바로가기 전화번호 02-501-9396
        주중 10시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외) 통신판매업
        신고번호 : 제 2017-서울강남-01977호 학원설립 운영등록번호:
        제12484호(강남) 원격평생교육원 : 제 572호
      </div>
    </footer>
  );
}
