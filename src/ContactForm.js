import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://ai-porject.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Email sent successfully!');
        setForm({ email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      <ToastContainer
        position='top-right'
        autoClose={3000}
        newestOnTop
        style={{
          zIndex: 9999,
          marginTop: '70px',
        }}
        toastStyle={{
          padding: '0.5rem 1rem',
          minHeight: '50px',
          fontSize: '0.95rem',
        }}
      />
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255,255,255,0.92)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          padding: '2.5rem 2rem',
          width: '100%',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1.1rem',
            outline: 'none',
          }}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={form.subject}
          onChange={handleChange}
          required
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1.1rem',
            outline: 'none',
          }}
        />
        <textarea
          name='message'
          placeholder='Message'
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1.1rem',
            outline: 'none',
            resize: 'vertical',
          }}
        />
        <button
          type='submit'
          disabled={loading}
          style={{
            background: loading ? '#888' : '#23252a',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '1rem',
            fontSize: '1.2rem',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
