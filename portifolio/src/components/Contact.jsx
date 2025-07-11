'use client';

import { useThemeStore } from '@/stores/themeStore';
import { useMessageStore } from '@/stores/messageStore';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const { theme } = useThemeStore();
  const { name, title,email, body, setName, setTitle,setEmail, setBody, clearForm } = useMessageStore();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    if (id === 'email') setEmail(value);
    if (id === 'subject') setTitle(value);
    if (id === 'message') setBody(value);
    console.log(`name: ${name}, email: ${email}, title: ${title}, body: ${body}`);
    
  }

   const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*Nova mensagem via site*\n\n *Nome:* ${name}\n *E-mail:* ${email}\n *Assunto:* ${title}\n\n *Mensagem:*\n${body}`;
    const phoneNumber = '5581988993441'; 
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    clearForm();
  };

  return (
    <section id="contact" className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Entre em <span className="text-purple-500">contato</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Informações de contato
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Entre em contato comigo para quaisquer dúvidas ou oportunidades. Responderei o mais breve possível.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Email</h4>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>dev.deivyson@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>celular</h4>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>+55 (81) 98899-3441</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="space-y-6" onChange={handleChange} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Seu nome
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Seu e-mail
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="john@exemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Assunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Deixe-me saber como posso ajudá-lo"
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Sua mensagem
                </label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Escreva sua mensagem aqui..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="hover:scale-105 transition transform flex items-center justify-center w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Enviar mensagem <FiSend className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}