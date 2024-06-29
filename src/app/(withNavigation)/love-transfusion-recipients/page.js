import { openSans } from '@/utilities/fonts/fonts'
import Image from 'next/image'
import React from 'react'
import Button from '@/app/components/Button'
import benny from '@/app/_homepage/recentRecipients/images/benny-sq-225x225.webp'
import adley from '@/app/(withNavigation)/(oldRecipients)/adley-is-battling-leukemia/images/adley-sq.webp'
import emma from '@/app/_homepage/recentRecipients/images/Emma-225x225.webp'
import Icon_facebook2 from '@/app/components/icons/Icon_facebook2'
import Icon_instagram from '@/app/components/icons/Icon_instagram'
import whiteLogo from './images/Logo-white.png'

const LoveTransfusionPage = () => {
  return (
    <div className={`${openSans.className} py-10`}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col items-center'
        }
      >
        {/* ********* 1 ************* */}
        <div className={'text-center lg:w-[37%] mx-auto'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-10'}>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Benny - Childhood Cancer</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Adley - Childhood Cancer</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
        </div>
        {/* ********* 2 ************* */}
        <div className={'text-center lg:w-[37%] mx-auto mt-[100px]'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-4 lg:gap-10'}>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Benny</p>
              <p className={'font-semibold leading-[22px]'}>Childhood Cancer</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Adley</p>
              <p className={'font-semibold leading-[22px]'}>Childhood Cancer</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma</p>
              <p className={'font-semibold leading-[22px]'}>Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma</p>
              <p className={'font-semibold leading-[22px]'}>Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
        </div>
        {/* ********* 2A ************* */}
        <div className={'text-center lg:w-[37%] mx-auto mt-[100px]'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-4 lg:gap-10'}>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Benny</p>
              <p className={'font-semibold leading-[22px]'}>Childhood Cancer</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Adley</p>
              <p className={'font-semibold leading-[22px]'}>Childhood Cancer</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma</p>
              <p className={'font-semibold leading-[22px]'}>Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma</p>
              <p className={'font-semibold leading-[22px]'}>Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <Button>Love Transfusion</Button>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ********* 2B ************* */}
        <div className={'text-center lg:w-[37%] mx-auto mt-[100px]'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-4 lg:gap-10'}>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>
                Benny - Childhood Cancer
              </p>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Image
                      src={whiteLogo}
                      alt="Love Transfusion Logo"
                      quality={100}
                      className="size-6"
                    />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>
                Adley - Childhood Cancer
              </p>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Image
                      src={whiteLogo}
                      alt="Love Transfusion Logo"
                      quality={100}
                      className="size-6"
                    />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma - Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Image
                      src={whiteLogo}
                      alt="Love Transfusion Logo"
                      quality={100}
                      className="size-6"
                    />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col py-8 gap-6 items-start border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[226px]"
            />
            <div className={'flex flex-col gap-2'}>
              <p className={'font-semibold leading-[22px]'}>Emma - Leukemia</p>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Image
                      src={whiteLogo}
                      alt="Love Transfusion Logo"
                      quality={100}
                      className="size-6"
                    />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_facebook2 className="text-white" />
                  </div>
                  <div
                    className={
                      'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                    }
                  >
                    <Icon_instagram className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ********* 3 ************* */}

        <div className={'text-center lg:w-[37%] mt-[100px] mx-auto'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div
          className={
            'grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-10'
          }
        >
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Benny - Childhood Cancer</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Adley - Childhood Cancer</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoveTransfusionPage
