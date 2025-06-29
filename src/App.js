import React from 'react';
import './App.css';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className='App'>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#222',
          padding: '1rem 0',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <a
          href='#home'
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Home
        </a>
        <a
          href='#about'
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          About Us
        </a>
        <a
          href='#contact'
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Contact Us
        </a>
      </nav>
      <section
        id='home'
        className='App-section'
        style={{
          background: `url('/bg-1.jpg') center/cover no-repeat`,
          color: '#fff',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(34, 37, 42, 0.7)',
            zIndex: 0,
          }}
        />
        <header
          className='App-header'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h1
            style={{
              fontWeight: 700,
              fontSize: '2.5rem',
              marginBottom: '1rem',
            }}
          >
            Swastik Tech Lab
          </h1>
          <h3
            style={{
              fontWeight: 400,
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            We forge solutions, you drive progress.
          </h3>
          <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
            Welcome to the digital frontier with a dependable partner. We
            transform your ideas into compelling experiences, guiding you from
            initial concept through to final execution. Let’s create the future
            together.
          </p>
        </header>
      </section>
      <section
        id='about'
        className='App-section about-section-custom'
        style={{ background: '#fff', color: '#23252a' }}
      >
        <div
          className='about-container'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '2rem 1rem',
          }}
        >
          <div
            className='about-img'
            style={{ flex: '1 1 350px', textAlign: 'center', minWidth: 300 }}
          >
            <img
              src='/who-img.jpg'
              alt='Who We Are'
              style={{
                maxWidth: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              }}
            />
          </div>
          <div
            className='about-content'
            style={{
              flex: '2 1 400px',
              padding: '2rem',
              minWidth: 300,
              textAlign: 'left',
            }}
          >
            <h1
              style={{
                fontWeight: 700,
                fontSize: '2.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: '#23252a',
              }}
            >
              <span
                style={{ borderBottom: '3px solid #ffd700', paddingBottom: 4 }}
              >
                WHO WE ARE?
              </span>
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: '#23252a',
              }}
            >
              We are a passionate team of tech enthusiasts and creative minds
              dedicated to shaping the future of digital experiences. Our
              diverse expertise in mobile app development, website design, UI/UX
              innovation, and digital marketing allows us to craft solutions
              that not only meet but exceed your expectations. We thrive on
              collaboration and are committed to delivering high-quality,
              tailored services that propel your business forward. Together, we
              turn challenges into opportunities and ideas into impactful
              realities.
            </p>
          </div>
        </div>
      </section>
      <section
        id='contact'
        className='App-section'
        style={{
          background: `url('/map-img.png') center/cover no-repeat`,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(34, 37, 42, 0.7)',
            zIndex: 0,
          }}
        />
        <header
          className='App-header'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h1
            style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1rem' }}
          >
            Contact Us
          </h1>
          <ContactForm />
        </header>
      </section>
    </div>
  );
}

export default App;
