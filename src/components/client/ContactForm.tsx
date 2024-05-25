import Checkbox from "./Checkbox";

const ContactForm = () => {
  const INPUT_PROPS = [
    {
      name: "name",
      placeholder: "*Nombre",
    },
    {
      name: "company",
      placeholder: "*Empresa",
    },
    {
      name: "email",
      placeholder: "*Correo",
    },
    {
      name: "country",
      placeholder: "*País",
    },
    {
      name: "phone",
      placeholder: "*Teléfono",
    },
  ];

  return (
    <section className="w-full lg:w-1/2 flex flex-col items-center">
      <form className="w-[90%] max-w-[400px] flex flex-col justify-center items-center gap-6">
        {INPUT_PROPS.map(({ name, placeholder }) => (
          <input
            key={`id-${name}`}
            className="w-full h-[34px] px-4 rounded"
            name={name}
            type="text"
            placeholder={placeholder}
          />
        ))}
        <textarea
          className="w-full px-4 rounded"
          name="message"
          placeholder="Mensaje"
          rows={4}
        />
        <Checkbox />
        <button className="w-[150px] md:self-start bg-custom-gradient hover:bg-none hover:bg-shadow text-blue-500 hover:text-white hover:border-white hover:border-[3px] w-[90%] max-w-56 max-h-11 py-2 px-4 flex justify-center items-center md:text-2xl font-semibold rounded-[5px] cursor-pointer shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
