import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { useAddBlogMutation } from "../../redux/features/blogs/blogSlice";

const storage = getStorage();

const WritePost = () => {
  const [addBlogData, { data, isError, isLoading }] = useAddBlogMutation();
  console.log(data)
  const [categoryOption, setCategoryOption] = useState("");
  const category = [
    { value: "technology", label: "Technology" },
    { value: "programming", label: "Programming" },
    { value: "app", label: "App" },
    { value: "gadget", label: "Gadget" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "review", label: "Review" },
    { value: "health", label: "Health" },
  ];
  const { email, name } = useSelector((state) => state.userSlice);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  // upload image in firebase storage
  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";

    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return str;
  };

  const handleSubmit = () => {
    const post = {
      title,
      descOne: value,
      image: media,
      slug: slugify(title),
      writer: name,
      email,
      date: new Date(),
      category: categoryOption.value,
    };
    addBlogData(post);
    console.log(post);
  };

  return (
    <div
      className="mb-20
    "
    >
      <Container>
        <div>
          <div className="flex justify-between mt-10 items-center mb-5">
            <div>
              <CreatableSelect
                className="w-60"
                isClearable
                options={category}
                defaultInputValue={categoryOption}
                onChange={setCategoryOption}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-5 bg-primary px-10 text-white py-2 rounded-3xl hover:text-gray-200 hover:shadow-xl"
            >
              Publish
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter your title..."
            className="border-none outline-none w-full text-4xl"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <div className="flex items-center justify-center w-full my-5">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <ReactQuill
              className="w-full h-96"
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
