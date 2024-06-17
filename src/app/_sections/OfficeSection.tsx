import TextReveal from "@/components/helpers/TextReveal";
import OfficeModal from "@/components/OfficeModal";

import { useState } from "react";

const officeData = [
  {
    name: "Tokyo Office",
    location: "Tokyo, Japan",
    src: "1.jpg",
    color: "#edb38d",
  },
  {
    name: "Mumbai Office",
    location: "Mumbai, India",
    src: "2.jpg",
    color: "#ac7b67",
  },
  {
    name: "Montreal Office",
    location: "Montreal, Canada",
    src: "3.jpg",
    color: "#cecdcc",
  },
  {
    name: "Paris Office",
    location: "Paris, France",
    src: "4.jpg",
    color: "#FFEFEF",
  },
  {
    name: "Beijing Office",
    location: "Beijing, China",
    src: "5.jpg",
    color: "#402E7A",
  },
];

const OfficeSection = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen max-w-full bg-slate-200">
      <h2 className="text-left w-[90%] text-black text-9xl font-tusker-grotesk tracking-wider my-10">
        <TextReveal type="letter">OUR OFFICES</TextReveal>
      </h2>
      <div className="flex gap-[2vw] py-[2vw] box-border h-[60%] w-[90%] min-w-[250px] mt-5">
        <div className="relative flex flex-col  w-[80%] min-w-[60rem] mx-auto">
          {officeData.map((office, i) => (
            <OfficeRow
              key={i}
              index={i}
              name={office.name}
              location={office.location}
              setModal={setModal}
            />
          ))}
          <OfficeModal modal={modal} officeData={officeData} />
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;

interface OfficeRowProps {
  name: string;
  location: string;
  index: number;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}

const OfficeRow = ({ name, location, index, setModal }: OfficeRowProps) => {
  return (
    <>
      <div className="h-[10px] w-full bg-black" />
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="flex justify-between items-center text-black h-full group hover:opacity-50 my-1 px-8 transition-all duration-200 ease-linear"
      >
        <h3 className="text-5xl group-hover:-translate-x-2 transition-all duration-200 ease-linear font-medium">
          {name}
        </h3>
        <p className="text-xl group-hover:translate-x-2 transition-all duration-200 ease-linear">
          {location}
        </p>
      </div>
      {index === officeData.length - 1 && (
        <div className="h-[10px] w-full bg-black" />
      )}
    </>
  );
};
