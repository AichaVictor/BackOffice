
function StepOne() {
  return (
    <div>
      <div>
  <h2 className="sr-only">Steps</h2>

  <div
    className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
      <li className="flex items-center gap-2 bg-white p-2">
        <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white"> 1 </span>

        <span className="hidden sm:block"> Verification Identite </span>
      </li>

      <li className="flex items-center gap-2 bg-white p-2">
        <span
          className="size-6 rounded-full text-center text-[10px]/6 font-bold text-white bg-gray-300"
        >
          2
        </span>

        <span className="hidden sm:block"> Activer Votre Compte </span>
      </li>

    </ol>
  </div>
</div>

    </div>
  );
}

export default StepOne;
