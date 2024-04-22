import {  UploadDropzone } from "@bytescale/upload-widget-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PeriodeParrainage from "../components/PeriodeParrainage";

function Home() {
  const options = {
  apiKey: "public_12a1yvf6su58K8X7CgQQXSUf2qyB", 
  maxFileCount: 1
};

  return (
    <div>
      <Header />
      <div className="flex items-center ml-10 mt-10 gap-5">
        <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">o</span>
        <h1 className="text-[20px] font-bold ">Upload Fichier Electoral</h1>
      </div>
      <div className="flex items-center mt-5 flex-col justify-center flex-between">
        <UploadDropzone options={options}
                    onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                    onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                    width="800px"
          height="400px" />
        <div className="flex justify-center mb-7">
            <label htmlFor="checksum" className="flex flex-start text-sm font-medium text-gray-700 items-center mr-2">
                    Valeur Checksum 
                    </label>

                    <input
                      type="text"
                      id="checksum"
                      name="valeur_checksum"
                      className="mt-1 w-64 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        
        <div className="col-span-6 flex items-center gap-4 " >
          <button disabled={true}
                    className="inline-block shrink-0 rounded-md border border-blue-600 text-blue-600 px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 e"
                  >
            Valider
          </button>
        </div>
      </div>
      <PeriodeParrainage/>
      <Footer/>
    </div>
  )}

export default Home;
