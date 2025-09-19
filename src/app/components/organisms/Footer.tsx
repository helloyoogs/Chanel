export default function Footer() {
  return (
    <footer
      className={
        "w-full mt-[2.5rem] px-[3.75rem] h-[3.75rem] flex items-center justify-between text-xs text-[#72787F] font-LGSMHATSB mobile:px-4 mobile:h-20 mobile:flex-col mobile:items-start mobile:gap-[0.6875rem] mobile:border-t mobile:border-[#DBDBDB] mobile:justify-center"
      }
    >
      <div className="hidden mobile:flex gap-[0.7rem]">
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#666666] font-LGSMHATSB">
          PRIVACY
        </p>
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#666666] font-LGSMHATSB">
          |
        </p>
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#666666] font-LGSMHATSB">
          LEGAL
        </p>
      </div>

      {/* 250818 명칭 변경 */}
      <p className="text-[0.75rem] leading-[0.8125rem] text-[#72787F] font-LGSMHATSB mobile:font-LGSMHATR">
        COPYRIGHT© 2024 CONTROL. ALLRIGHT RESERVED.
      </p>

      <div className="flex items-center gap-[0.70625rem] mobile:hidden">
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#72787F] font-LGSMHATSB">
          TERMS & CONDITIONS
        </p>
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#72787F] font-LGSMHATSB">
          |
        </p>
        <p className="text-[0.75rem] leading-[0.8125rem] text-[#72787F] font-LGSMHATSB">
          PRIVACY POLICY
        </p>
      </div>
    </footer>
  );
}
