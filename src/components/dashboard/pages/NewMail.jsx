import { useRef } from "react";

const NewMail = () => {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", file);
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="px-4 mt-4 w-full flex flex-col mb-8">
        {/* Reset Password */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center max-[464px]:flex-col">
            <h3 className="text-[#F6F6F6] text-[28px] font-semibold w-full">
              Sent Notifications
            </h3>

            {/* Delete and resend button */}
            <div className="flex justify-end gap-8 w-full">
              <button className="text-[#D8A409] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]">
                Send Notification
              </button>
            </div>
          </div>

          {/* add notifications */}
          <div className="w-full flex flex-col gap-8 mt-4">
            {/* New password */}
            <div className="text-[#FFFFFF] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
              <div className="flex flex-col gap-4 my-4 w-full">
                {/* To */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32">
                    To
                  </label>
                  <select
                    name="gender"
                    id="nameGender"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] w-full md:w-2/5 lg:w-[25%]"
                  >
                    <option value="gender" className="text-[16px]">
                      Select the users
                    </option>
                    <option value="gender" className="text-[16px]">
                      Gaurav
                    </option>
                    <option value="gender" className="text-[16px]">
                      Milan
                    </option>
                  </select>
                </div>

                {/* Title */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col w-full">
                  <label htmlFor="name" className="w-32">
                    Email title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="userName"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] w-full md:w-2/5 lg:w-[25%]"
                    defaultValue={"New Function"}
                  />
                </div>

                {/* message */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="notifyMessage"
                    cols="30"
                    rows="5"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] w-full md:w-2/5 lg:w-[25%]"
                    defaultValue={
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae, cum et placeat asperiores vero consequuntur debitis nobis assumenda praesentium!"
                    }
                  ></textarea>
                </div>

                {/* Add file */}
                <div className="flex items-center gap-16 max-[446px]:gap-2 max-[446px]:flex-col w-full">
                  <label htmlFor="userName" className="w-32">
                    Add file
                  </label>
                  <input
                    type="file"
                    name="name"
                    id="userName"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  <button
                    onClick={openFilePicker}
                    className="bg-[#3D3B35] border border-[#F6F6F6] outline-none rounded-md p-2 h-[40px] w-full md:w-2/5 lg:w-[25%] placeholder:text-[#949494] text-start"
                  >
                    Choose file
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMail;