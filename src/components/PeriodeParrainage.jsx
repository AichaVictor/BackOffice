

function PeriodeParrainage() {

  return (
    <div>
      <div className="flex items-center ml-10 mt-10 gap-5">
        <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">o</span>
        <h1 className="text-[20px] font-bold ">Periode Parrainage</h1>
      </div>
      <div className="mt-5 flex jusitfy-center flex-col gap-7 ml-10">
        <div>
          <label htmlFor="date_debut">Debut: </label>
          <input type="date" id="date_debut" name="date_debut" />
        </div>
        <div>
          <label htmlFor="date_fin" className="mr-6">Fin: </label>
          <input type="date" id="date_fin" name="date_fin" />
        </div>
        <button className="w-32 flex items-center justify-center shrink-0 rounded-md border border-white-600 text-white px-12 py-3 text-sm font-medium bg-blue-600 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ">
            Enregistrer 
        </button>

      </div>
      <div>
      </div>
    </div>
  );
}

export default PeriodeParrainage;
