import { useState, type ChangeEvent, type FormEvent } from "react";
import Checkbox from "./Checkbox";
import { INPUT_PROPS } from "../../utils/consts";
import { validateForm } from "../../utils/validations";
import { formatInputPhone } from "../../utils/formatInput";
import Spinner from "./Spinner";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  message: string;
  agreeToPolicies: boolean;
  [key: string]: string | boolean;
}

const initialForm = {
  name: "",
  company: "",
  email: "",
  country: "",
  phone: "",
  message: "",
  agreeToPolicies: false,
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const { checked } = event.target as HTMLInputElement;
      setForm({
        ...form,
        [name]: checked,
      });
    } else {
      const finalValue = name === "phone" ? formatInputPhone(value) : value;

      setForm({
        ...form,
        [name]: finalValue,
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formError = validateForm(form);
    setError(formError);
    try {
      if (formError) return;
      const res = await emailjs.send(
        import.meta.env.PUBLIC_EMAIL_SERVICE_ID,
        import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.PUBLIC_EMAIL_KEY
      );
      if (res.status === 200) {
        setIsFormSend(true);
        setForm(initialForm);
        setError("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsFormSend(false);
      }, 3000);
    }
  };

  return (
    <section className="w-full lg:w-1/2 flex flex-col items-center">
      <form
        className="w-[90%] max-w-[400px] flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit}
      >
        {INPUT_PROPS.map(({ name, placeholder }) => (
          <input
            key={`id-${name}`}
            className="w-full h-[34px] px-4 text-black rounded focus:outline-none"
            name={name}
            value={form[name] as string}
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        ))}
        <textarea
          className="w-full px-4 p-1 text-black rounded resize-none focus:outline-none"
          name="message"
          value={form.message}
          placeholder="Mensaje"
          rows={4}
          onChange={handleInputChange}
        />
        <Checkbox checked={form.agreeToPolicies} onChange={handleInputChange} />
        {error ? (
          <span
            className="w-full p-4 text-xs text-red-600 rounded-lg bg-shadow "
            role="alert"
          >
            {error}
          </span>
        ) : null}
        {isFormSend ? (
          <span
            className="w-full p-4 text-sm text-center text-green-500 rounded-lg bg-shadow"
            role="alert"
          >
            Mensaje enviado ✔
          </span>
        ) : null}
        <button
          className="w-[150px] h-[44px] md:self-start bg-custom-gradient hover:bg-none hover:bg-shadow text-blue-500 hover:text-white hover:border-white hover:border-[3px] w-[90%] max-w-56 max-h-11 py-2 px-4 flex justify-center items-center md:text-2xl font-semibold rounded-[5px] cursor-pointer shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] disabled:bg-custom-gradient disabled:border-none disabled:cursor-default"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Enviar"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
