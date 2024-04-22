
function FormCandidat() {
  return (
    <div>

      <div className="w-full flex items-center justify-center gap-5 mt-10">
        <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">
          o
        </span>
        <h1 className="text-[20px] font-bold ">Ajouter un Nouveau Candidat</h1>
      </div>
        <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
              <div className="mb-5">
                  <label htmlFor="nce" className="mb-3 block text-base font-medium text-[#07074D]">
                      Numero Carte Electeur
                  </label>
                  <input type="text" name="Numero Carte Electeur" id="nce" placeholder="Numero Carte Electeur"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              {/* <div className="mb-5">
                  <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                      Phone Number
                  </label>
                  <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                  <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                      Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                          <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                              Date
                          </label>
                          <input type="date" name="date" id="date"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                          <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                              Time
                          </label>
                          <input type="time" name="time" id="time"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>
                  </div>
              </div>

              <div className="mb-5 pt-3">
                  <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Address Details
                  </label>
                  <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                              <input type="text" name="area" id="area" placeholder="Enter area"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                              <input type="text" name="city" id="city" placeholder="Enter city"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                              <input type="text" name="state" id="state" placeholder="Enter state"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                              <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                  </div>
              </div>

              <div> */}
                  <button
                      className="hover:shadow-form w-32 rounded-md bg-[#024ebc]/80 hover:bg-[#024ebc] py-3 px-8 text-center text-base font-semibold text-white outline-none">Verifier</button>
              {/* </div> */}
          </form>
      </div>
  </div>
      </div>
  );
}

export default FormCandidat;
