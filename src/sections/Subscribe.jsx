import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        CONTACT US
      </h3>
      <div>
        <h1>PRODUCTS & ORDERS</h1>
        <h2>1-800-806-6453</h2>
        <h3>4 am - 11 pm</h3>
        <h3>PT 7 days a week</h3>
      </div>
      <div>
        <h1>COMPANY INFO & INQUIRIES </h1>
        <h2>1-800-344-6453</h2>
        <h3>7 am - 4 pm</h3>
        <h3>PT Mon - Fri</h3>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
