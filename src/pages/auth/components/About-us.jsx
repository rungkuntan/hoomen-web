export default function AboutUs() {
  return (
    <div className="">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
        className="w-[1280px] h-full opacity-50 object-cover absolute "
      />
      <div>
        <h2 class="font-heading tracking-px-n mb-10 pt-5 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-5xl">
          About Us
        </h2>
      </div>
      <div className="md:container">
        <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center md:mt-10 md:flex-row md:items-start md:gap-10 md:pb-10">
          <div className="container mt-5 px-4">
            <p className="text-justify text-black md:text-left lg:text-lg">
              <span className="font-bold">&#9642; Welcome</span> to our
              veterinary clinic, where the health and well-being of your furry
              friend is our top priority. Our experienced and compassionate team
              of veterinary professionals is dedicated to providing
              high-quality, comprehensive care for all of your pet's needs. At
              our clinic, we offer a wide range of services to meet the diverse
              needs of our patients, including routine check-ups, vaccinations,
              diagnostic testing, surgical procedures, and much more. Our
              state-of-the-art facility is equipped with the latest technology
              and tools to ensure the best possible care for your pet. We
              understand the special bond that exists between a pet and their
              owner, and we are committed to building strong, lasting
              relationships with all of our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
