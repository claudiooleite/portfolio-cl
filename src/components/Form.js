"use client";

import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    let valid = true;

    // Validate email
    if (!validEmail(email)) {
      setEmailErr(true);
      valid = false;
    } else {
      setEmailErr(false);
    }

    // Validate name
    if (!validName(name)) {
      setNameErr(true);
      valid = false;
    } else {
      setNameErr(false);
    }

    // If valid, submit the form
    if (valid) {
      const formData = new FormData(event.target);
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then((data) => {
          console.log("Form submitted:", data);
          setEmail("");
          setName("");
        })
        .catch((error) => {
          console.error("Form submission error:", error);
        });
    }
  };

  function validEmail(email) {
    return email.includes("@");
  }

  function validName(name) {
    return name.length >= 3;
  }

  return (
    <>
      <form
        name="feedback"
        netlify="true"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4">
        <input
          type="hidden"
          name="form-name"
          autoComplete="form"
          value="feedback"
        />

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 focus:border-coral outline-none p-2 rounded"
          required
        />
        {nameErr && (
          <p className="text-red-500">
            Your name is invalid (min 3 characters)
          </p>
        )}

        <input
          name="email"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 focus:border-coral outline-none p-2 rounded"
          required
        />
        {emailErr && (
          <p className="text-red-500">
            Your email is invalid (must contain &apos;@&apos;)
          </p>
        )}

        <textarea
          name="message"
          placeholder="Your Message"
          autoComplete="No message added."
          className="border-2 focus:border-coral outline-none p-2 rounded"
        />

        <button
          className="bg-gunmetal text-lightGray font-semibold py-2 px-4 rounded-md w-fit self-center"
          type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}

export default FeedbackForm;
