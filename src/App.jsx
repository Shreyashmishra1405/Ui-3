import { motion } from "motion/react";
import { useState } from "react";
function App() {
  const data = [
    {
      type: "STARTER",
      price: "0",
      fit: "Perfect For Small Teams",
      btn: "Start Hiring",
      points: ["3 projects", "Ai Applicant Screening"],
    },
    {
      type: "PROFESSIONAL",
      price: "99",
      fit: "Perfect For Growing Teams",
      btn: "Start Hiring",
      points: [
        "Unlimited Projects",
        "Ai Applicant Screening",
        "Ai Recruiter",
        "Risk-Free Guarantee",
      ],
    },
    {
      type: "ENTERPRISE",
      price: "Custom",
      fit: "For Large Teams",
      btn: "Start Hiring",
      points: [
        "Unlimited Projects",
        "Ai Applicant Screening",
        "Custom Skill Assessments",
        "Custom Ai Recruiter",
      ],
    },
  ];

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <div className=" w-full relative h-screen flex justify-center items-center bg-black overflow-hidden">
        {active && (
          <motion.div
            initial={{opacity:0 , scale:0 }}
            transition={{duration:0.5 }}
            whileInView={{ filter: active ? "blur(0px)" : "blur(10px)" , scale:1 , opacity:1 }}
            exit={{ scale:0 , opacity:1}}
            className="absolute top-80 left-160 w-[400px] h-[200px] bg-black rounded-md z-1
             text-white gap-6 flex flex-col justify-between items-center"
          >
            <div className="flex  w-full p-2 justify-end flex-row">
              <button className="cursor-pointer" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="white"
                  height={"1.5em"}
                >
                  <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" />
                </svg>
              </button>
            </div>
            <h1 className="">Do you want to proceed with this plan?</h1>
            <div className="flex w-full gap-2 px-4 mb-10">
              <button
                onClick={handleClick}
                className="cursor-pointer max-w-1/2 text-black w-full py-2 rounded-3xl hover:bg-neutral-200 bg-white"
              >
                Yes
              </button>
              <button
                onClick={handleClick}
                className="cursor-pointer max-w-1/2 border text-white w-full py-2 rounded-3xl bg-black"
              >
                No
              </button>
            </div>
          </motion.div>
        )}
        <motion.div
          // initial={{ opacity: 0, y: -500 }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: active ? "blur(10px)" : "blur(0px)",
          }}
          transition={{ duration: 1, ease: "backOut" }}
          className="bg-neutral-100  rounded-2xl h-[700px] w-[1000px] flex flex-col gap-8 justify-center items-center font p-10"
        >
          <div className="flex flex-col max-w-[250px] ">
            <h1 className="text-[40px] font-bold ">Pricing plans</h1>
            <p className="text-sm font-semibold">
              choose the right plan for your needs.
            </p>
          </div>
          <div className="box flex flex-row gap-4 justify-center h-[80%] w-full">
            {data.map((el, idx) => {
              return (
                <div className="card shadow-2xl text-white p-2 rounded-3xl w-1/3 bg-white">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="upper flex flex-col gap-4 p-2 shadow-2xl  rounded-2xl"
                  >
                    <motion.div
                      whileHover={
                        idx == 1
                          ? {
                              background: `linear-gradient(to right, #d01e0ef , #add8ef)`,
                            }
                          : {}
                      }
                      transition={{ duration: 1, repeat: 2, ease: "linear" }}
                      className="box p-4 h-[150px] flex flex-col justify-between rounded-3xl  bg-neutral-200 text-black"
                      style={
                        idx == 1
                          ? {
                              background:
                                "linear-gradient(to right, #dad8ef, #d0e0ef)",
                            }
                          : {}
                      }
                    >
                      <span
                        style={
                          idx == 1
                            ? {
                                background: "#e2e7fc",
                              }
                            : {}
                        }
                        className="px-4 py-2 bg-white text-black rounded-l-2xl  rounded-r-2xl text-sm max-w-fit font-semibold"
                      >
                        {el.type}
                      </span>
                      <span className="text-black text-3xl font-bold">
                        {el.price === "Custom"
                          ? "Custom"
                          : "$" + `${el.price}/month`}
                      </span>
                    </motion.div>
                    <p className="text-black font-semibold px-2">{el.fit}</p>
                    <button
                      onClick={handleClick}
                      className=" cursor-pointer text-white w-full py-2 rounded-3xl bg-black"
                    >
                      Start Hiring
                    </button>
                  </motion.div>
                  <div className="flex flex-col px-2 gap-4 text-black mt-10 "></div>
                  {el.points.map((pt) => {
                    return (
                      <span className="flex items-center text-md gap-1 font-semibold text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          height={"1em"}
                          fill="gray"
                        >
                          {" "}
                          <path
                            d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 
                    534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6
                     530.9 134z"
                          />
                        </svg>
                        {pt}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
