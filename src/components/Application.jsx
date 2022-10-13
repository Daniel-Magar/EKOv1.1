import React from "react";
import AIVid from "../img/AIVid.png";
import AI from "../video/AI.mp4";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Play from "../img/Play.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  width: 1000,
  // bgcolor: "background.paper",
  bgcolor: "transparent",

  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};
const Application = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className=" md:min-h-[5rem] lg:min-h-[5rem]">
      <div className=" md:mt-[2rem] lg:mt-[1rem] ">
        <div className="bg-black w-full  min-h-[14rem] md:min-h-[14rem] lg:min-h-[14rem] xl:min-h-[30em] 2xl:min-h-[27rem] py-1 lg:py-2 xl:py-10 2xl:py-14 z-10  flex flex-col  md:flex-col lg:flex-row-reverse">
          <div className="lg:w-[60%] bg-black border-none lg:relative ">
            <h1 className=" lg:hidden text-black flex justify-center items-center pt-5 pb-7 text-2xl font-semibold lg:justify-start lg:pt-1">
              Application of AI
            </h1>
            <div className=" flex justify-end lg:absolute lg:top-[-2rem] xl:top-[-2rem] 2xl:top-[-2rem] right-0 clipped-image border bg-black">
              <img
                src={AIVid}
                alt="ArtificialIntelligence"
                className="hidden md:hidden lg:flex lg:flex-1 flex-grow-0 md:max-w-[40rem] lg:max-w-[45rem] xl:max-w-[56rem] 2xl:max-w-[84rem] relative"
              />

              <div className="  absolute  z-[999] bottom-2">
                <button onClick={handleOpen} className="text-white ">
                  <img src={Play} alt="play" />
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <video
                        id="myvid"
                        controls
                        // className="hidden md:hidden lg:flex lg:flex-1 z-[1] flex-grow-0 md:max-w-[40rem] lg:max-w-[45rem] xl:max-w-[56rem] 2xl:max-w-[84rem]"
                      >
                        <source src={AI} type="video/mp4" />
                        <source src={AI} type="video/ogg" />
                        <object data="video.mp4">
                          <embed src={AI} />
                        </object>
                      </video>
                    </Typography>
                  </Box>
                </Modal>
              </div>

              <img
                src={AIVid}
                alt="ArtificialIntelligence"
                className="lg:hidden flex"
              />
            </div>

            <div className="lg:hidden mx-[2rem]">
              <p className="pt-[2rem] pb-[2rem] w-full flex    text-black md:pt-[4rem] md:pb-[4rem]">
                Artificial Intelligence has various applications in today's
                society. It is becoming essential for today's time because it
                can solve complex problems with an efficient way in multiple
                industries, such as Healthcare, entertainment, finance,
                education, etc. AI is making our daily life more comfortable and
                fast.
              </p>
            </div>
          </div>

          <div className=" bg-[#F5FEFF] lg:w-full lg:min-h-[19rem] xl:min-h-[20rem] 2xl:min-h-[38rem]">
            <div className=" lg:absolute left-0 lg:w-[50%] xl:w-[40%] 2xl:w-[40%] lg:pt-4 xl:pt-8 lg:mr-[10rem] 2xl:mr-[15rem]">
              <div className="lg:flex flex-col  justify-between lg:gap-8 xl:gap-10 2xl:gap-28">
                <div className="lg:max-w-[50rem] ml-[3rem] lg:mr-[9rem] xl:ml-[6rem] xl:mr-[10rem] text-[14px] 2xl:text-xl lg:text-sm ">
                  <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <h1 className="hidden md:hidden    text-black lg:flex justify-center items-center pt-5 pb-7 text-2xl 2xl:text-[2rem] font-semibold lg:justify-start lg:pt-1">
                      Application of AI
                    </h1>
                    <p className="w-full hidden md:hidden 2xl:text-[1.2rem]  text-black lg:flex md:pt-[4rem]  md:pb-[4rem] lg:pt-[0rem] xl:pt-8 2xl:pt-[6rem] lg:pb-0 lg:justify-center lg:items-center">
                      Artificial Intelligence has various applications in
                      today's society. It is becoming essential for today's time
                      because it can solve complex problems with an efficient
                      way in multiple industries, such as Healthcare,
                      entertainment, finance, education, etc. AI is making our
                      daily life more comfortable and fast.
                    </p>
                  </div>
                </div>
                <div className=" pb-5 md:pb-3 flex justify-center items-center ml-0 lg:flex lg:justify-start lg:items-start xl:ml-[6rem] lg:ml-[3rem] xl:mr-[10rem]  ">
                  <div>
                    <button className="text-xl">View More</button>
                    <div className="w-full flex gap-1 ">
                      <div className="border border-bright-blue w-[80%] bg-bright-blue"></div>
                      <div className=" "></div>
                      <div className="border border-bright-blue w-[10%] bg-bright-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
