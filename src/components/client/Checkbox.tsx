const Checkbox = () => {
  return (
    <div className="inline-flex items-center">
      <label
        className="bg-white relative flex items-center p-3 rounded cursor-pointer"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="checkbox"
        />
        <span className="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <span className="ms-3 text-base">
        He leído y acepto las{" "}
        <a
          className="text-base text-fuchsia-100"
          href="/politicas-de-privacidad"
        >
          Politícas de Privacidad
        </a>{" "}
        y{" "}
        <a className="text-base text-fuchsia-100" href="/tratamiento-de-datos">
          Tratamiento de Datos
        </a>
      </span>
    </div>
  );
};

export default Checkbox;
