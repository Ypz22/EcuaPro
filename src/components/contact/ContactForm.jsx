const FORM_FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter your name..." },
  { name: "subject", label: "Subject", type: "text", placeholder: "Enter a subject..." },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Message...",
    rows: 4,
  },
];

export default function ContactForm({
  description,
  formId,
  values,
  onChange,
  onSubmit,
  submitLabel,
}) {
  return (
    <form className="form-contact" onSubmit={onSubmit}>
      <p>{description}</p>
      {FORM_FIELDS.map((field) => {
        const fieldId = `${formId}-${field.name}`;

        return (
          <div className="form-group" key={field.name}>
            <label className="sr-only" htmlFor={fieldId}>
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={fieldId}
                name={field.name}
                rows={field.rows}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={onChange}
                required
              />
            ) : (
              <input
                id={fieldId}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={onChange}
                required
              />
            )}
          </div>
        );
      })}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
