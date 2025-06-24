"use client"
import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

const reviews = [
  {
    id: 1,
    text: "We employed Lambert & Wright to project manage our kitchen redesign and build. We were instantly impressed with the professional nature in which they approached our requests and linked us in with an excellent kitchen designer. Once the build was under way we were very happy with the quality of workmen they employed along with the nature in which they tackled and solved our changes and the unforeseen problems which surfaced. The final result is a high quality kitchen finished to the best standards.",
    name: "Ed & Liz Barnett",
  },
  {
    id: 2,
    text: "We engaged Lambert & Wright to undertake the conversion of our garage into a studio/multipurpose room with an adjacent Jack and Jill bathroom, remodelling of a utility room, and total heating and plumbing upgrade. We have been very happy with the quality of work. We had a clear schedule of works and despite the challenges of Covid this was adhered to. All the tradespeople were of a high quality, a pleasure to work with, and were always responsive to our input. Jason managed the project closely and is focused on ensuring work is undertaken to a high standard with a clear attention to detail. From start to finish the build went smoothly. We would happily recommend Lambert & Wright.",
    name: "J.Rollin",
  },
  {
    id: 3,
    text: "I would highly recommend Lambert & Wright. All aspects of their work from initial consultation through to the aftercare provided are really of the highest level. We have recently had a new heating system and boiler installed by Jason and his team and we were very pleased with the initial advice on both the correct remedial work for our old system and the best products to use. We are extremely happy with the installation and quality of workmanship. Jason took the time to explain in detail the new system and how it works and the aftercare service has been fantastic.",
    name: "Amy Baxter",
  },
  {
    id: 4,
    text: "We have recently engaged Jason to install a new family bathroom into our house. From our first meeting, Jason’s extensive knowledge of bathrooms, kitchens and central heating systems impressed us. Jason introduced us to Joanne from Bathrooms by Regency in Wigston, who patiently assisted us in making choices with regard to all the necessary sanitary ware and fittings. Jason also coordinated all the necessary associated trade’s people, which helped enormously to expedite the process. The final result has been a completely modernised, functional and aesthetically pleasing bathroom with a superb quality of finishing. We would have no hesitation in recommending Jason and look forward to him returning shortly to overhaul our Central Heating Systems and re-fit our ensuite bathroom.",
    name: "Neil & Sharon Burke",
  },
  {
    id: 5,
    text: "We met Larry Lambert late in 2011, and quickly felt we wanted him to take on our project of converting a derelict grade II listed barn into a wonderful living space for guests. Larry makes you feel that nothing is impossible and will hold your hand on all aspects of the build. Having never built anything before, Larry gave us the confidence that the work would be done properly and professionally. I would say Larry cares about the project just as much as the client does. He wants to put his name to quality work. We would have no hesitation in recommending Larry and his building firm to future clients, in fact we have already done so.",
    name: "William and Sasha de Gale. Rectory Cottage, Rutland.",
  },
  {
    id: 6,
    text: "Last year I moved into a small, detached house which almost suited my needs, except that there was a very small kitchen and no dining room. However, Larry saw the potential to improve this situation by knocking through from the kitchen into the adjacent passage and into the integral garage, to make a large kitchen/dining room. I contacted Larry to discuss the possibilities of this conversion, which Larry and his team undertook for me, and they made a fantastic job of it! The conditions were not easy as it was winter, but they were considerate and careful of every aspect, including leaving the area tidy and clean as possible at the end of each day. Larry dealt with every aspect of building regulations, electricians, plumbers, safety checks etc. and were always thoroughly professional. I would highly recommend them for their attention to detail and ability to come up with excellent ideas and suggestions to enhance the finish of their work.",
    name: "Alison Baker. Kibworth Beachamp, Leicestershire.",
  },
  {
    id: 7,
    text: "Larry and his team refurbished my bathroom and kitchen in 2012. I am pleased to say that the whole process from initial discussion, design, estimating and ordering of materials through to installing, decorating, and completing these rooms was carried out in the most professional manner. I and my partner are delighted with the end result. Throughout the process, Larry consulted us whenever there was an unexpected circumstance (as there inevitably is on such works) and were always pro-active and reasonable in helping us to arrive at the right solutions. They completed the work on time and on budget and I would not hesitate to recommend them to friends and family or to use their services again.",
    name: "Kevin Dolan. Farnham, Surrey.",
  },
  {
    id: 8,
    text: "Larry redesigned and fitted our kitchen to suit our present lifestyle in our family home. We wanted to incorporate a settee. Larry had so many good ideas, totally in keeping with the design of the house, and we have been thrilled with the result. His work is of a very high standard.",
    name: "Anne & Richard Bloor. Burton Overy, Leicestershire.",
  },
  {
    id: 9,
    text: "Larry and his team built a substantial two bedroom, sitting room and bathroom extension to my property. Despite the significant nature of the work, the disturbance was minimal, and the work carried out was superb. I would highly recommend the; diligence, quality of work, flexibility and good nature of Larry and his team to anyone considering altering their existing property or indeed building a new one!",
    name: "Kirby Muxloe, MD Pannells Financial Planning Ltd.",
  },
  {
    id: 10,
    text: `We engaged Lambert & Wright properties to undertake the conversion of our garage into a studio/multipurpose room with an adjacent Jack and Jill bathroom, remodelling of a utility room, and total heating and plumbing upgrade.
We have been very happy with the quality of work. We had a clear schedule of works and despite the challenges of Covid this was adhered to.  All the tradespeople were of a high quality, a pleasure to work with and were always responsive to our input.  Jason managed the project closely and is focused on ensuring work is undertaken to a high standard with a clear attention to detail.
From start to finish the build went smoothly.
We would happily recommend Lambert & Wright`,
    name: "Jude",
  },
];

export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDragging(false);
      setOffsetX(0);
      nextReview();
    },
    onSwipedRight: () => {
      setDragging(false);
      setOffsetX(0);
      prevReview();
    },
    onSwiping: (event) => {
      setDragging(true);
      setOffsetX(event.deltaX);
    },
    onSwiped: () => {
      setDragging(false);
      setOffsetX(0);
    },
    trackMouse: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="isolate overflow-hidden bg-white">
      <div
        {...swipeHandlers}
        className="relative mx-auto max-w-screen-xl px-4 lg:px-6 py-24 sm:py-32"
      >
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl text-[#3B464B] font-bold text-center mb-12">WHAT OUR CUSTOMERS SAY</h2>
          <div className="flex overflow-hidden relative">
            <div
              className="flex w-full cursor-grab"
              style={{
                transform: `translateX(calc(${offsetX}px - ${currentReviewIndex * 100}%))`,
                transition: dragging ? 'none' : 'transform 0.3s ease',
                cursor: dragging ? 'grabbing' : 'grab'
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <figure className="flex flex-col items-center gap-y-8 lg:gap-x-10">
                    <blockquote className="text-l font-semibold leading-8 text-[#3B464B] sm:leading-9 w-full text-center">
                      <p>{review.text}</p>
                    </blockquote>
                    <figcaption className="text-base">
                      <div className="font-semibold text-[#3B464B]">{review.name}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button onClick={prevReview} className="mx-2 text-[#3B464B] hover:text-gray-900 focus:outline-none" aria-label="Previous review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {reviews.map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentReviewIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
            <button onClick={nextReview} className="mx-2 text-[#3B464B] hover:text-gray-900 focus:outline-none" aria-label="Next review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm text-[#3B464B]">
              {currentReviewIndex + 1} of {reviews.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}