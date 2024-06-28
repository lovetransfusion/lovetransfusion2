import React from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'

const TestimonialsPage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Testimonials
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Testimonials</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col gap-3 font-semibold'}>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Spent some time this morning getting a clearer understanding
              about this Love Transfusion program. IT IS WONDERFUL!!! What a
              great idea! There is such a HUGE need for this… It’s a lonely and
              scary road out there for so many. What a HUGE difference this
              could make in so many lives.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DO</p>
              </div>
              <p className={'text-[#808080]'}>
                Debbie O. – Coeur d’Alene, Idaho
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Oh wow, you guys have made our night, week, month [my daughter]
              is so excited… she is absolutely over the moon thank you. for your
              love and prayers and well wishes… thank you so very much Love
              Transfusion.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>NS</p>
              </div>
              <p className={'text-[#808080]'}>
                Natalie S. – Queensland, Australia
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Your support was so uplifting for us and it really helped lift
              our spirits through a very (at the time) soul-destroying moment in
              our lives…”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>RC</p>
              </div>
              <p className={'text-[#808080]'}>
                Raewyn C. – Auckland, New Zealand
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I just truly love all the work you have done with Love
              Transfusion. You set a wonderful example for so many and have
              given a lot of people a way to reach out to help others. I think
              so many would like to help but just aren’t sure how. You have made
              it so very easy to reach the people that need it the most.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>PE</p>
              </div>
              <p className={'text-[#808080]'}>Pamela E. – Newark, Delaware</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I just want to thank you all from the bottom of my heart for the
              kind and beautiful words of moral support and prayer for my son!
              That mean’s more to me then you will ever know!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LP</p>
              </div>
              <p className={'text-[#808080]'}>Laurie P. – Lincoln, NE</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I love what you all do! You give people hope & love & let them
              know that people really do care, in this crazy mixed up world!!
              Thank You for all your beautiful posts! They help me through my
              daily life, that’s for sure! God Bless You All!!!!!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DG</p>
              </div>
              <p className={'text-[#808080]'}>Diane G. – Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I’d just like to say a very, very big thank you to you for doing
              a post about my nephew. My sister and myself have sat down and
              read each and every one of the messages of hope that have been
              posted and we have both been in tears at the amount of love and
              good wishes coming his way because of this post. I am very proud
              to be part of the Love Transfusion community and thank you so, so
              much from the bottom of my heart.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>SW</p>
              </div>
              <p className={'text-[#808080]'}>Sharon W.- Manchester, UK</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you all so much. I showed Nicholas the post and he was so
              happy. He was smiling from ear to ear. Thank you for that.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>EB</p>
              </div>
              <p className={'text-[#808080]'}>Elizabeth B. – Deltona, FL</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “THANK YOU!! It meant so much to our family to see so many people
              care and wish my son a happy birthday. He is an amazing little man
              and has come so far. We wish each and everyone many many
              blessings; because, we have been truely blessed.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DP</p>
              </div>
              <p className={'text-[#808080]'}>Deidi P.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you all so much for your prayers and your beautiful
              comments! I have tears running down my face right now after
              reading all of your words of love and support! This is a perfect
              page to share love and prayers for those in need… So beautiful!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MM</p>
              </div>
              <p className={'text-[#808080]'}>
                Maggie M. – Marmora, New Jersey
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Your site is absolutely wonderful and I only wish I had found it
              sooner. Thank you for what you do and God Bless!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LM</p>
              </div>
              <p className={'text-[#808080]'}>
                Lisa M. – Kansas City, Missouri
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “My Heartfelt Thanks to ALL at Love Transfusion, I am really
              grateful to ALL and to all the Lovely People that have left
              messages, it really means a lot to know so many people care, my
              love to All.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>B</p>
              </div>
              <p className={'text-[#808080]'}>Bethanie – London, England</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I love this site as it will give me a chance to pray for others
              that are going thru rough times with family members! Awesome of
              you to have this site!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KP</p>
              </div>
              <p className={'text-[#808080]'}>Kathy P. – Ohio</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you so very much Love Transfusion! This means so much to
              us!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>SB</p>
              </div>
              <p className={'text-[#808080]'}>Sharon B. – Valencia, Spain</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I want to thank Love Transfusion for sharing my daughter’s story
              with all of your followers. The outpouring of prayers and love
              that she has gotten today has touched our hearts so much.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KA</p>
              </div>
              <p className={'text-[#808080]'}>
                Kimberly A. – Spartanburg, South Carolina
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “How truly touching. Thank you everyone for such beautiful words &
              support!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DD</p>
              </div>
              <p className={'text-[#808080]'}>
                Danniella D. – Perth, Australia
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “So overwhelmed by the out pouring of love and prayers we have
              received after Love Transfusion shared my page.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CC</p>
              </div>
              <p className={'text-[#808080]'}>Carol C. – Federalsburg, MD</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I just wanted to let you all know that this is amazing what you
              do. I would never have imagined that this was as good and helpful
              as it is. Thank you so much for getting people’s stories out and
              read, because as people, I think we’re getting too caught up in
              the world and not focusing on what’s really important. So again I
              thank you for your time.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MH</p>
              </div>
              <p className={'text-[#808080]'}>
                Monique H. – Calumet Park, Illinois
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for so much for the love and support, means a lot to me
              & my family.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>BM</p>
              </div>
              <p className={'text-[#808080]'}>Betty M. – Missouri</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “We cannot thank enough Love Transfusion for hosting our story.
              Thank you for being our voice and helping us reach our supporters
              all over the world.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AB</p>
              </div>
              <p className={'text-[#808080]'}>
                Aleksander B. – Zakarpats’ka Oblast, Ukraine
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for your page to assist families with tragedies and
              triumphs… it feels good to be loved.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>JE</p>
              </div>
              <p className={'text-[#808080]'}>Janet E. – Warren, Michigan</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “We just wanted to tell you thank you for sharing my daughter’s
              story, and connecting us with so many prayer warriors and kind
              people. What you have done is a true gift to me. I (her mom) am
              reading every comment, in happy tears that so many people care
              enough to write something and share her story. But your page, is
              and will always be, in our hearts. God bless YOU!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CH</p>
              </div>
              <p className={'text-[#808080]'}>Cassey H. – Virginia</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you all so much for the prayers and sweet words of
              encouragement for my sister.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KR</p>
              </div>
              <p className={'text-[#808080]'}>Kristal R. – Austin, Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for reaching out to us. You exemplify the Samaritan
              that stopped to help.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>BF</p>
              </div>
              <p className={'text-[#808080]'}>Branndon F.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I love my buddies at Love Transfusion! They know how to make my
              day.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>JR</p>
              </div>
              <p className={'text-[#808080]'}>Jimmie R. – Beaumont, TX</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Just writing to let you know you have a wonderful page. It is a
              fantastic idea, and gives people hope and to let people know that
              there are people who care… I am truly amazing by all of the
              support. I have 6 months of treatment left after battling
              leukemia. It has been one long ride and I am getting there…Your
              page gave me hope knowing there are people around the world that
              care. Thank you for such a wonderful peace of mind and support.
              Knowing I’m not alone.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LJ</p>
              </div>
              <p className={'text-[#808080]'}>
                Lauren J. – Queensland, Australia
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I thank you all very much… The outpouring of prayers to me on
              Love Transfusion has meant a whole lot to me.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>BD</p>
              </div>
              <p className={'text-[#808080]'}>
                Brian D. – North Vernon, Indiana
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Your page helps me with my illness… I thank you for that! You are
              a blessing to so many more than you probably will ever know!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DW</p>
              </div>
              <p className={'text-[#808080]'}>DeDe W. – Urbana, Illinois</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you soo much for sharing my story, it turned out beautiful!
              I am full of tears right now… God Bless you”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DS</p>
              </div>
              <p className={'text-[#808080]'}>Dawn S.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I just want to thank everyone for their encouragement, thoughts
              and prayers!! It truly means a lot.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>HR</p>
              </div>
              <p className={'text-[#808080]'}>Heather R.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “God Bless you and what you have done for me to spread my journey
              and awareness!!! I just clicked on the link and read everyones
              comments!! I can’t thank you enough to have done this for me!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CR</p>
              </div>
              <p className={'text-[#808080]'}>Cindie R.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you Love Transfusion for all you are doing for families.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KP</p>
              </div>
              <p className={'text-[#808080]'}>Kris P. – Quartz Hill, CA</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I am amazed by all the outpouring of love, prayers, support,
              shares and likes. Thank you everyone for the support. That’s so
              sweet of you to share my son’s page. You are so sweet.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>EC</p>
              </div>
              <p className={'text-[#808080]'}>Erica C. – New York</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you Love Transfusion. You gave me the little hope I needed
              when I wanted to lose hope. Thank you.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>NG</p>
              </div>
              <p className={'text-[#808080]'}>Natasha G. – El Paso, Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you to all of you who pray for my grandson and his family…
              thank you for the tremendous support you extended, we will be
              forever grateful to all of you.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MN</p>
              </div>
              <p className={'text-[#808080]'}>Marie N. – Albay, Philippines</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for sharing my story, and thank you everyon again for
              the kind words.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CH</p>
              </div>
              <p className={'text-[#808080]'}>Claire H. – United Kingdom</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I am so very blessed to have Love Transfusion Inc. on my fb page.
              I realize each and every day is a day to be thankful and to take
              time to bless others. Blessings to the ones who have made this
              possible. I will continue to pray for you also.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>PS</p>
              </div>
              <p className={'text-[#808080]'}>Peggy Sue D.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>“I Absolutely Love what you are doing!!! Thank you so much.”</p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KS</p>
              </div>
              <p className={'text-[#808080]'}>
                Katie S. – Riverside, Rhode Island
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Wow… what can I say other than thank you to those behind the
              scenes on this page. Finding this page & discovering the amazing
              vision & love that is here has truly touched my heart & I willl
              keep you, the kids & the families in my prayers. God Bless you
              all.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>RG</p>
              </div>
              <p className={'text-[#808080]'}>
                Rachel G. – Melbourne, Australia
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “My heart rejoices as I read all of your heartwarming messages and
              prayers for my nephew. On behalf of our family, we thank all of
              you and may God bless you.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MC</p>
              </div>
              <p className={'text-[#808080]'}>Mai C. – Hollister, California</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thanks to each and everyone for making my son feel so special.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LG</p>
              </div>
              <p className={'text-[#808080]'}>
                Lisa G. – Yeehaw Junction, Florida
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Your Website Is Wonderful & Blessed! Love & Prayers To You All!
              Thank U 4 Making Us All Aware! God Bless You!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>TW</p>
              </div>
              <p className={'text-[#808080]'}>Tina W. – South Carolina</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I would like to thank Love Transfusion for telling my son’s story
              and thank everyone that is praying for him. It means so much to
              me. Thank you and God bless.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MS</p>
              </div>
              <p className={'text-[#808080]'}>
                Melissa S. – Murietta, California
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thanks for all you do! Prayers for support & resources! Neat work
              you do!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>SM</p>
              </div>
              <p className={'text-[#808080]'}>Sheila M.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I love Love Transfusion so much! I am beyond touched!!! No one
              has ever caused me to feel so appreciated. Thank you from my
              heart….just thank you!! Love Transfusion has made such a
              difference in my life.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AL</p>
              </div>
              <p className={'text-[#808080]'}>Linda A. – Tyler, Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for this page dedicated to helping others who are sick
              and in need of prayer and encouragement.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>GH</p>
              </div>
              <p className={'text-[#808080]'}>Greg H. – Pigeon Forge, TN</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Love Transfusion and our Facebook page has changed our life! We
              so want to thank each and every one of you! Love Transfusion and
              our Facebook page is my family’s refuge. I never thought that the
              kindness of strangers could mean as much as it does to us. Thank
              you with all our heart and soul. You truly are amazing people!
              …May God bless you all many more times than you have given us!!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>JH</p>
              </div>
              <p className={'text-[#808080]'}>
                Jeannette H. – Philadelphia, PA
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you Love Transfusion for helping us get Blake’s story out
              there.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CL</p>
              </div>
              <p className={'text-[#808080]'}>Cortney L. – Griffith, IN</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you everyone here at Love Transfusions for all the love and
              support you’ve given us today. We are speechless by this
              outpouring. It is a dream come true having all these amazing
              people praying for sweet baby.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>DF</p>
              </div>
              <p className={'text-[#808080]'}>Doreen F. – Morrisville, PA</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>“Thank you for the awesome support!”</p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AR</p>
              </div>
              <p className={'text-[#808080]'}>Alex R. – Orlando, Florida</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you, Love Transfusion, for sharing. Thank you, everyone,
              for liking and sharing this and for your prayers and messages of
              love. These are an encouragement…”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CY</p>
              </div>
              <p className={'text-[#808080]'}>Connie Y. – Shelby, NC</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I thank you and all the people involved with Love Transfusion for
              creating such a wonderful cause. Its a great thing to know that so
              many people that you have never met care so much. You’re all
              amazing!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KL</p>
              </div>
              <p className={'text-[#808080]'}>Krystina L. – Florida</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you all so very very much for the sweet comments and
              prayers. I love the love that you all have for my sweet son!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MD</p>
              </div>
              <p className={'text-[#808080]'}>Melissa D. – Las Vegas, NV</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>“This is so awesome! Great ministry.”</p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LB</p>
              </div>
              <p className={'text-[#808080]'}>Larry B. – Gainesville, GA</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “What an awesome page! Great idea… reaching out to others, just to
              support them! You’re doing such a great thing!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MC</p>
              </div>
              <p className={'text-[#808080]'}>Marnie C.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Love Transfusion is Amazing! Thank you so much for support for me
              and my family… so happy got smile on face. Thank you thank you
              thank you thank you… love you all”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AK</p>
              </div>
              <p className={'text-[#808080]'}>
                Abigail K. – Darlington, United Kingdom
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you deeply for putting this together It brought tears of
              joy to know so many more will pray for my Dad.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>MC</p>
              </div>
              <p className={'text-[#808080]'}>Michelle C. – Worcester, MA</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you so much! Because of Love Transfusion I reached my goal!
              I think what you are doing is absolutely amazing.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>E</p>
              </div>
              <p className={'text-[#808080]'}>Emma – Thiensville, WI</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “This Organization is truly amazing, what a wonderful way to help
              spread so much love and positivity in large amounts 🙂 Thank you
              for bringing so many struggles to light for support. It is so nice
              to see facebook used in such a positive way!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AL</p>
              </div>
              <p className={'text-[#808080]'}>Alika L.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you so much Love Transfusion for sharing this story, it
              really is inspiring. You do all you can to help others in the same
              boat you were in or worse, and I thank God for people like you
              daily.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CY</p>
              </div>
              <p className={'text-[#808080]'}>Chrissie Y. – Amsterdam, Ohio</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Your page is great and love it. Thanks for sharing all these
              great pages.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>TK</p>
              </div>
              <p className={'text-[#808080]'}>
                Tami K. – Spokane Valley, Washington
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I am so touched by your story and all the stories that you post
              of the different families and what they go through. I would like
              to personally thank you for all the time and effort you guys put
              into this page. It helps people remember tragedy can affect us all
              no matter race, gender, or social status. Again thank you.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>PT</p>
              </div>
              <p className={'text-[#808080]'}>Patricia T.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “What an incredibly beautiful and inspiring concept and mission!
              Thank you for all of the good that you do and the healing you are
              helping to bring. WOW! I’m very moved :). My love and prayers are
              with all of these incredible people!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>GR</p>
              </div>
              <p className={'text-[#808080]'}>
                Gemini R. – Winter Haven, Florida
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Was feeling sorry for myself – again – when I came across your
              wonderful site. And quickly realized that none of us is so alone
              that we can’t reach out to and pray for one another in love and
              human kindness. Thanks so much for being.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AB</p>
              </div>
              <p className={'text-[#808080]'}>Ann B. – Winchester, Ontario</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “My son’s page on Love Transfusion has reached over 10,000 likes,
              and over 1,000 comments, and 2,000 shares! We are so happy and
              excited for him! We’ve had people from all around the world
              sending him prayers, love, and birthday wishes. I’m so happy for
              him that it brings me to tears… Thank you, Love Transfusion!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>TK</p>
              </div>
              <p className={'text-[#808080]'}>
                Trisha K. – Rancho Cucamonga, CA
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>“What an amazzzing site you have, thank you for creating it!”</p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>GV</p>
              </div>
              <p className={'text-[#808080]'}>
                Gabriela V. – Coconut Creek, FL
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “What an incredibly beautiful name~ “Love Transfusion”. I just
              stumbled into it today and have read a number of stories and the
              tears can’t stop pouring. I have taken so much for granted!
              Reading the stories of all these lovely people (children not
              spared), has given me a rethink. I complain over the simplest of
              things, meanwhile all these courageous people want is good health.
              I PRAY to God for divine healing. I thank each and everyone of
              them (including you Kevin the founder) for the oportunity to
              change certain things in my life and to thank God that I am
              healthy. With love being transfused here, MIRACLES will happen…”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>EO</p>
              </div>
              <p className={'text-[#808080]'}>Evelyn O. – Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “I want to thank you all from the bottom of my heart. Love
              transfusion has helped get [my niece’s] story out there and helped
              her [Facebook page] grow and the outpour of prayers and thoughts
              have been overwhelming! I love each and everyone of y’all and what
              you do for these children and their families! God bless!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>SB</p>
              </div>
              <p className={'text-[#808080]'}>Stacey B. – Arkansas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Just wanted to stop in and say hello and what a great page this
              is! As someone who was born with serious health issues and has
              dealt with it my entire life, it is wonderful to see this positive
              and caring addition to FB.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>RM</p>
              </div>
              <p className={'text-[#808080]'}>Romy M. – Virginia</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you so much for everything you do, not only for us, but for
              other families going through these types of things. It means the
              world to me and all the prayers are giving me hope that she will
              improve…”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>CW</p>
              </div>
              <p className={'text-[#808080]'}>Cassandra W. – Holiday, FL</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for providing this wonderful way of spreading love and
              support to those who need it the most.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AR</p>
              </div>
              <p className={'text-[#808080]'}>Ally R.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you so much for what you do and getting the word out there
              for those who are in need of prayers and good thoughts. It makes a
              huge different to know that people care it it makes my son smile
              to know how many people care about what he is going through.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AF</p>
              </div>
              <p className={'text-[#808080]'}>Amber F. – Cheyenne, Wyoming</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “As a mother of four, two of wich have Cerebral Palsy, I am so
              grateful to find this page :). Seeing all the brave and strong
              people on this page gives me more strength and hope! God Bless you
              all.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AS</p>
              </div>
              <p className={'text-[#808080]'}>Ashley L. – Michigan</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Hey guys i just want to let you know that this page is so amazing
              and best thing I have found on Facebook.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>RD</p>
              </div>
              <p className={'text-[#808080]'}>
                Rachel D. – Wollongong, New South Wales
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “What a wonderful site! It’s so uplifting to see how people can be
              so giving of their best wishes and prays! God bless all those who
              are suffering and their loved ones.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KC</p>
              </div>
              <p className={'text-[#808080]'}>Karla C. – Gunnison, Colorado</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “This organization is amazing!! Thank you for giving people a
              place to come and voice their struggles, and giving others a place
              to come and find very real people to pray for. The more prayers,
              the better.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KB</p>
              </div>
              <p className={'text-[#808080]'}>
                Katrina B. – Visalia, California
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you all So very much, for all you do every day. I have many
              many friends battling…. including one who’s only seven…. and I
              just want to let you know, you are APPRECIATED by many.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>TL</p>
              </div>
              <p className={'text-[#808080]'}>TL – Olympia, Washington</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “This is a wonderful page for everybody to come together and know
              that whatever illness or loss people are dealing with that they
              are not alone.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>VB</p>
              </div>
              <p className={'text-[#808080]'}>Veronica B. – Ontario, Canada</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Hello Love Transfusion, I love your organization….what a
              BLESSING!!! Thanks for spreading the Love.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LR</p>
              </div>
              <p className={'text-[#808080]'}>Linda R. – Houston, Texas</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Can honestly say I love this page. Just few words of wisdom, love
              and support can go a long way! & it just goes to show how many
              people can help one person. Love and hope can be key to a child’s
              sufferance. I never fail to go past one of these pictures and like
              or comment on the picture. just to know that many people are
              behind you can mean a whole difference to someones way of
              thinking! God bless these people! And what a fantastic idea for a
              page!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>HL</p>
              </div>
              <p className={'text-[#808080]'}>Hannah L. – Cardiff, England</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Love your page, may our Lord bless you and bless your work… Not
              all angels have wings.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>FA</p>
              </div>
              <p className={'text-[#808080]'}>Faith A.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “My family and I are so blessed to have come across this site and
              read all of the kind words and prayers from their followers. This
              is truly amazing and my family and I read through all of the
              comments and looked at all of the likes this post got us.
              Completely in Amazement.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>KG</p>
              </div>
              <p className={'text-[#808080]'}>Keri G. – Iowa</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “This is a fantastic non-profit. I have not found one better
              online.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>EO</p>
              </div>
              <p className={'text-[#808080]'}>Em O. – South Carolina</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>“What a great organization!”</p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>ML</p>
              </div>
              <p className={'text-[#808080]'}>Michael L.</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “What a lovely page you have. Thank you from a parent who has lost
              a child for thinking of those that need it the at the most
              difficult of times. It can take just a second to send a message to
              someone but the impact can last a life time. Thanks.”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>BG</p>
              </div>
              <p className={'text-[#808080]'}>
                Belinda T. – Melbourne, Australia
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Thank you for doing this for my Mom! You have no idea what this
              means to me! Also to able to show her that she has support all
              over the place and she not alone! This means everything! Thank
              You!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>WO</p>
              </div>
              <p className={'text-[#808080]'}>Wendy O. – Utah</p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “If only I could recall the day I found this page. It has taken me
              on an extremely unexpected journey. Saying, “Thanks” wouldn’t come
              close to being enough to showing my appreciation/gratitude. Much
              love to you, Love Transfusion, you give Facebook much needed
              substance, “Thanks again””
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>LR</p>
              </div>
              <p className={'text-[#808080]'}>
                L. Rose – Arkansas, United States
              </p>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] px-[25px] pt-[19px] pb-5'}>
            <p>
              “Love transfusion!! You are awesome!!!! Went on your facepage &
              seen all the people just wanting a kind word!!! Thank you!!!!”
            </p>
            <div className={'flex mt-2 gap-2 items-center'}>
              <div
                className={
                  'flex justify-center items-center bg-primary p-2 rounded-full text-white size-10'
                }
              >
                <p className={''}>AH</p>
              </div>
              <p className={'text-[#808080]'}>Adalee H. – Milan, MO</p>
            </div>
          </div>
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default TestimonialsPage
