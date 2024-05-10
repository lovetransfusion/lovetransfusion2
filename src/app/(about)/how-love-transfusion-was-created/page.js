import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'

const MessageFromTheFounder = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <p
            className={
              'text-[30px] mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Why Love Transfusion Was Created
          </p>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar
        className={'text-[15px] flex flex-col gap-[10px]'}
      >
        <p className={''}>
          In the fall of 2007, I had an emergency appendectomy. Although the
          procedure went fine, tests revealed other symptoms which were
          “suggestive of metastatic disease” (Stage IV cancer). Two weeks later,
          radiologists at a separate medical facility came to the same
          conclusion, with test results “suggesting metastatic disease”.
          Although not an official diagnosis, from my perspective, it looked
          grim.
        </p>
        <p className={''}>
          Fortunately, after several months of tests and scans, doctors
          determined I was cancer-free. All that remained were multiple
          non-calcified nodules scattered throughout both lungs.
        </p>
        <p className={''}>
          Those months were the most difficult of my life. They also gave me a
          new perspective into what goes through the mind of someone facing
          life’s darkest moments.
        </p>
        <p className={''}>
          Some of my clearest memories were, in moments of despair, of making my
          way to my computer in the middle of the night – hoping to see a
          message from someone. Fortunately for me, I am blessed with an
          extended network of family and friends. And over those months, many
          reached out with compassion, hope and love.
        </p>
        <p className={''}>
          In the years that followed, I have had a burning desire to help others
          in the midst of similar battles. Some bravely, some with anxiety – and
          some in great fear. Regardless of the situation, there is something we
          can all do to infuse a degree of hope and peace back into these
          people’s lives… and that is simply to let them know we are there and
          that we care.
        </p>
        <p className={'mt-[25px]'}>
          Kevin Lengkeek<br></br>President and Founder<br></br>Love Transfusion,
          Inc.<br></br>1201 N. Orange St<br></br>Suite 799<br></br>Wilmington,
          DE 19801<br></br>Office 302.838.4232
        </p>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default MessageFromTheFounder
