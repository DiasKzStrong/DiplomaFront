"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

const FileDropZone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-full h-64 flex flex-col justify-center items-center border rounded-md p-2"
    >
      <div className="h-full w-full  flex justify-center items-center">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Файлды осында лақтырыңыз немесе басып таңдаңыз</p>
        )}
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <Upload className="text-2xl w-14" />
      </div>
    </div>
  );
};

export default FileDropZone;
