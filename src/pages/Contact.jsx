import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus("sending");

    // Get IDs from .env
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      phone: data.phone || "",
      date: new Date().toLocaleString(),
    };

    // Fallback if EmailJS not configured
    if (!SERVICE_ID || SERVICE_ID === "YOUR_SERVICE_ID") {
      const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
      stored.push(templateParams);
      localStorage.setItem("contacts", JSON.stringify(stored));
      setStatus("saved_local");
      reset();
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-16 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Your name"
          className="p-3 rounded border dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className="p-3 rounded border dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.email && <span className="text-red-500">Valid email is required</span>}

        <input
          {...register("phone")}
          placeholder="Phone (optional)"
          className="p-3 rounded border dark:bg-gray-800 dark:text-gray-100"
        />

        <textarea
          {...register("message", { required: true })}
          rows="6"
          placeholder="Message"
          className="p-3 rounded border dark:bg-gray-800 dark:text-gray-100"
        />
        {errors.message && <span className="text-red-500">Message is required</span>}

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-4 text-center text-sm">
        {status === "sending" && "Sending..."}
        {status === "success" && "Message sent — we will get back to you!"}
        {status === "saved_local" && "Saved locally (EmailJS not configured). Will show in localStorage."}
        {status === "error" && "An error occurred. Check console."}
      </div>
    </Motion.section>
  );
}

export default Contact;