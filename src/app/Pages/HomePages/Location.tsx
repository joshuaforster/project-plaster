import React from 'react';

const Location: React.FC = () => {
  const headline = "Our Location";
  const description = (
    <>
      <p className="mb-4 text-lg text-[#3B464B]">
        We are located in the heart of Leicester, a vibrant and historic city in the Midlands. Our office is easily accessible and situated in a bustling area with a rich history and modern amenities.
      </p>
      <p className="mb-4 text-lg text-[#3B464B]">
        Leicester is known for its beautiful architecture, cultural heritage, and welcoming community. It offers a perfect blend of traditional charm and contemporary living, making it an ideal place for both work and leisure.
      </p>
    </>
  );

  return (
    <section className="bg-gray-100">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light ">
          <h2 className="mb-4 text-4xl tracking-tight text-[#3B464B]">
            {headline}
          </h2 >
          {description}
        </div>
        <div className="grid gap-4 mt-8">
          <iframe
            title="Our Location in Leicester"
            className="mt-4 w-full lg:mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47094.52549403851!2d-1.1544990894195147!3d52.635047020743654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760917fff12e3%3A0x5a9d5f8d9a9a4d29!2sLeicester%2C%20UK!5e0!3m2!1sen!2suk!4v1716115566626!5m2!1sen!2suk"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;