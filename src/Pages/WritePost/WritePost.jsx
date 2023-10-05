import React, { useState } from "react";
import Container from "../../components/Container/Container";
import {
  AiFillPlusCircle,
  AiOutlineCloudUpload,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePost = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div
      className="mb-20
    "
    >
      <Container>
        <div>
          <input type="text" placeholder="Title" />
          <div className="flex gap-5 h-[700px]">
            <button
              className="w-[36px] h-[36px] rounded-full bg-transparent border border-primary flex items-center justify-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <AiFillPlusCircle />
            </button>
            {open && (
              <div>
                <button className="w-[36px] h-[36px] rounded-full bg-transparent border border-primary flex items-center justify-center cursor-pointer">
                  <BsImage />
                </button>
                <button className="w-[36px] h-[36px] rounded-full bg-transparent border border-primary flex items-center justify-center cursor-pointer">
                  <AiOutlineCloudUpload />
                </button>
                <button className="w-[36px] h-[36px] rounded-full bg-transparent border border-primary flex items-center justify-center cursor-pointer">
                  <AiOutlineVideoCameraAdd />
                </button>
              </div>
            )}
            <ReactQuill
              className="w-full"
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WritePost;
