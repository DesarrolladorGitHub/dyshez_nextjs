"use client";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [pictures, setPictures] = useState<any>([]);
  const [selected, setSelected] = useState<
    Partial<{ name: string; url: string }>
  >({});
  const inputFile = useRef<HTMLInputElement>(null);

  async function getData() {
    const { data, error } = await supabase.storage.from("pictures").list("", {
      limit: 10,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

    if (error) toast.error(`Error request data ${error}`);
    console.log(data);
    setPictures(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const onClickUpload = () => {
    if (inputFile.current == null) return;

    inputFile.current.click();
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    const { data, error } = await supabase.storage
      .from("pictures")
      .upload(`picture_${new Date().getTime()}.jpg`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) toast.error(`Error upload image ${error}`);

    if (data) {
      toast.success("Upload image success!");
      getData();
    }
  };

  const selectImage = (name: string) => {
    setSelected({ name, url: getURL(name) });
  };

  const deleteImage = async (e:React.MouseEvent<HTMLButtonElement>,name: String) => {
    e.stopPropagation()
    const { data, error } = await supabase.storage
      .from("pictures")
      .remove([`${name}`]);

    if (error) toast.error(`Error remove image ${error}`);

    if (data) {
      toast.success("Remove image success!");
      getData();
    }
  };

  const getURL = (name: string): string => {
    const { data } = supabase.storage.from("pictures").getPublicUrl(`${name}`);
    console.log(data);
    return data.publicUrl ?? "";
  };

  return (
    <main className="flex flex-col h-full">
      <ToastContainer />
      <label className="w-full text-2xl font-bold leading-7">
        Pictures
      </label>
      <div className="flex flex-row gap-2 mt-5">
        <div className="w-2/3 grid grid-cols-5 gap-3">
          <div
            className="h-48 flex justify-center items-center text-lg border border-dashed rounded-md cursor-pointer"
            onClick={onClickUpload}
          >
            +
          </div>
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          {pictures &&
            pictures.map((ele: any) => {
              return (
                <div
                  className={`h-48 flex justify-center items-center text-lg rounded-md cursor-pointer hover:border-primary hover:border-4 hover:opacity-70 group ${
                    selected?.name == ele.name ? "border-primary border-4" : ""
                  }`}
                  onClick={() => selectImage(ele.name)}
                  key={ele.id}
                >
                  <img
                    src={`${getURL(ele.name)}`}
                    className="object-cover h-full w-full"
                  ></img>
                  <button
                    className="absolute m-auto bg-white group-hover:visible invisible p-3"
                    onClick={(e) => deleteImage(e,ele.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M8.69238 8.46153C9.24467 8.46153 9.69238 8.90925 9.69238 9.46153V15.6154C9.69238 16.1677 9.24467 16.6154 8.69238 16.6154C8.1401 16.6154 7.69238 16.1677 7.69238 15.6154V9.46153C7.69238 8.90925 8.1401 8.46153 8.69238 8.46153Z"
                        fill="#0C0C0C"
                      />
                      <path
                        d="M14.3076 9.46153C14.3076 8.90925 13.8599 8.46153 13.3076 8.46153C12.7553 8.46153 12.3076 8.90925 12.3076 9.46153V15.6154C12.3076 16.1677 12.7553 16.6154 13.3076 16.6154C13.8599 16.6154 14.3076 16.1677 14.3076 15.6154V9.46153Z"
                        fill="#0C0C0C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.69227 0.769226C8.01903 0.769226 7.37336 1.03667 6.89731 1.51272C6.42125 1.98878 6.15381 2.63445 6.15381 3.30769V3.84615H1C0.447715 3.84615 0 4.29386 0 4.84615C0 5.39843 0.447715 5.84615 1 5.84615H3.07715V18.6923C3.07715 19.3655 3.34459 20.0112 3.82065 20.4873C4.2967 20.9633 4.94237 21.2308 5.61561 21.2308H16.3848C17.0581 21.2308 17.7038 20.9633 18.1798 20.4873C18.6559 20.0112 18.9233 19.3655 18.9233 18.6923V5.84615H21C21.5523 5.84615 22 5.39843 22 4.84615C22 4.29386 21.5523 3.84615 21 3.84615H15.8461V3.30769C15.8461 2.63445 15.5787 1.98878 15.1026 1.51272C14.6266 1.03667 13.9809 0.769226 13.3077 0.769226H8.69227ZM13.8461 3.84615V3.30769C13.8461 3.16488 13.7894 3.02792 13.6884 2.92694C13.5874 2.82596 13.4505 2.76923 13.3077 2.76923H8.69227C8.54946 2.76923 8.4125 2.82596 8.31152 2.92694C8.21054 3.02792 8.15381 3.16488 8.15381 3.30769V3.84615H13.8461ZM5.07715 5.84615V18.6923C5.07715 18.8351 5.13388 18.9721 5.23486 19.0731C5.33584 19.174 5.4728 19.2308 5.61561 19.2308H16.3848C16.5276 19.2308 16.6646 19.174 16.7656 19.0731C16.8666 18.9721 16.9233 18.8351 16.9233 18.6923V5.84615H5.07715Z"
                        fill="#0C0C0C"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
        </div>
        {selected.name && (
          <div className="flex flex-col justify-center w-1/3">
            <div className="my-5 mx-auto w-36">
              <div className="aspect-square flex justify-center flex-col">
                <label className="font-semibold text-center">PREVIEW 1:1</label>
                <img
                  className="object-cover w-full h-full"
                  src={selected.url}
                />
              </div>
            </div>
            <div className="my-5 mx-auto w-36">
              <div className="aspect-video flex justify-center flex-col">
                <label className="font-semibold text-center">
                  PREVIEW 16:1
                </label>
                <img
                  className="object-cover w-full h-full"
                  src={selected.url}
                />
              </div>
            </div>
            <div className="my-5 mx-auto w-36">
              <div className="aspect-[9/16] flex justify-center flex-col">
                <label className="font-semibold text-center">
                  PREVIEW 1:16
                </label>
                <img
                  className="object-cover w-full h-full"
                  src={selected.url}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
