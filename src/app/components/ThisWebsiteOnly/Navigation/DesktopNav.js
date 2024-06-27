'use client'
import Link from 'next/link'

const DesktopNav = ({ parameters: { nav, pathName } }) => {
  return (
    <div className={'hidden xl:flex gap-10 flex-wrap gap-y-3 items-center'}>
      {nav.map((item, index) => {
        const { name, path } = item
        return (
          <div key={index} className={'group/main relative'}>
            <div className="font-semibold">
              {path ? <Link href={path}>{name}</Link> : name}
            </div>
            <div
              className={
                'hidden group-hover/main:block absolute pt-[38px] left-0 w-fit z-20 text-[#262b2e] leading-[22px] text-[13px] font-semibold'
              }
            >
              <div className={'bg-white shadow-md py-[13px]'}>
                {item?.array?.map((sub, i) => {
                  return (
                    <div key={i} className={'group/sub relative'}>
                      {sub?.path ? (
                        <Link
                          href={sub?.path || ''}
                          className="hover:text-primary"
                        >
                          <p
                            className={'px-5 py-[5px] w-[210px] 2xl:w-[260px]'}
                          >
                            {sub.name}
                          </p>
                        </Link>
                      ) : (
                        <p className={'px-5 py-[5px] w-[210px] 2xl:w-[260px]'}>
                          {sub.name}
                        </p>
                      )}
                      <div
                        className={
                          'hidden group-hover/sub:block absolute top-0 right-[-210px] 2xl:right-[-260px] w-fit z-20 text-[#262b2e] leading-[22px] text-[13px] font-semibold '
                        }
                      >
                        <div className={'bg-white shadow-md py-[13px]'}>
                          {sub?.array?.map((sub2, i) => {
                            return (
                              <div key={i} className={'relative'}>
                                <Link
                                  href={sub2?.path || ''}
                                  className="hover:text-primary"
                                >
                                  <p className="px-5 py-[5px] w-[210px] 2xl:w-[260px]">
                                    {sub2.name}
                                  </p>
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DesktopNav
