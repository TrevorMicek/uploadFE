import React, { useState, useEffect } from "react";
import GetPage from "./GetPage";
import {
  CodeBracketIcon,
  ChartBarIcon,
  CreditCardIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function FeatureSection() {
  const [file, setFile] = useState(null);
  const [getImages, setGetImages] = useState(null);
  const [getFiles, setGetFiles] = useState(null);
  const [images, setImages] = useState(false);
  const [files, setFiles] = useState(false);
  useEffect(() => {
    GetPage("images")
      .then((res) => res.json())
      .then(
        (data) => {
          setGetImages(data.filenames);
        },
        (error) => {
          console.log(error);
        },
      )
      .then(
        GetPage("files")
          .then((res) => res.json())
          .then(
            (data) => {
              setGetFiles(data.filenames);
            },
            (error) => {
              console.log(error);
            },
          ),
      );
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    // Append the file to the FormData object with a field name, e.g., 'file'
    formData.append("file", file);
    // You can also append other text fields
    formData.append("description", "A test file upload");

    try {
      const response = await fetch(
        "https://uploadfe.webdevtrevor.workers.dev/",
        {
          method: "POST",
          body: formData, // The browser sets the Content-Type header automatically
        },
      );
      GetPage("images")
        .then((res) => res.json())
        .then(
          (data) => {
            setGetImages(data.filenames);
          },
          (error) => {
            console.log(error);
          },
        );
      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };
  const deleteFile = async (fileName, type) => {
    try {
      const response = await fetch(
        `http://localhost:3000/data/${type}/${fileName}`,
        {
          method: "POST",
          body: fileName, // The browser sets the Content-Type header automatically
        },
      ).then(
        GetPage("images")
          .then((res) => res.json())
          .then(
            (data) => {
              console.log("retrieve data");
              setGetImages(data.filenames);
            },
            (error) => {
              console.log(error);
            },
          ),
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };
  const ImageGallery = () => (
    <div className="flex flex-row flex-wrap gap-6  justify-center">
      {getImages &&
        getImages.map((item) => (
          <div className="w-52 h-auto relative">
            <div className="group w-52 h-full absolute z-10 hover:bg-black/20 ">
              <div className="opacity-0 mx-2 flex justify-between group-hover:opacity-100">
                <a
                  href={`http://localhost:3000/data/images/${item}`}
                  download={`http://localhost:3000/data/images/${item}`}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 pt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 pt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => deleteFile(item, "images")}
                  className="cursor-pointer text-lg"
                >
                  x
                </button>
              </div>
            </div>
            <img
              src={`http://localhost:3000/data/images/${item}`}
              className=" border-2 border-white"
            />
          </div>
        ))}
    </div>
  );
  const FileComp = () => (
    <div className="flex flex-row flex-wrap gap-6  justify-center">
      {getFiles &&
        getFiles.map((item) => (
          <div className="w-52 h-auto relative mt-5">
            <div className="group w-52 h-full absolute z-10 hover:bg-black/20 ">
              <div className="border-2 border-white px-2 opacity-100 mx-2 flex justify-between group-hover:opacity-100">
                <div className="border-r-2 pr-2">PDF</div>
                <div>{item}</div>
                <a
                  href={`http://localhost:3000/data/files/${item}`}
                  download={`http://localhost:3000/data/files/${item}`}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 pt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 pt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => deleteFile(item, "files")}
                  className="cursor-pointer text-lg"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  const Files = () => {
    switch (true) {
      case images:
        return <ImageGallery />;
      case files:
        return <FileComp />;
      default:
        return (
          <div className="text-white flex flex-row space-x-10 mx-auto">
            <div onClick={() => setImages(true)} className="cursor-pointer">
              images
            </div>
            <div onClick={() => setFiles(true)} className="cursor-pointer">
              files
            </div>
          </div>
        );
    }
  };
  return (
    <div
      className="text-white pb-10 pt-12 h-screen   relative overflow-hidden bg-neutral-800"
      style={{
        gridColumn: "span 7",
        gridRowStart: "first",
        gridRowEnd: "second",
      }}
    >
      <div className="flex flex-col space-y-5 max-w-7xl mx-auto px-4 mb-12 sm:px-9 lg:px-8 .5xl:w-[800px]">
        <input
          type="file"
          id="input"
          onChange={handleFileChange}
          className=" hidden"
        />
        <label
          htmlFor="input"
          className=" mx-auto text-center cursor-pointer bg-white w-32 text-black rounded-md py-1 px-2"
        >
          Choose File
        </label>
        <div className="mx-auto text-white">
          {file ? file.name : "no file selected"}
        </div>
        <button
          onClick={handleUpload}
          disabled={!file}
          className=" bg-indigo-700 rounded-md py-2 px-2"
        >
          Upload File
        </button>
        <Files />
      </div>
    </div>
  );
}
