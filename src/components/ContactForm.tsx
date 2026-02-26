"use client";

import React, { useState } from 'react';
import Button from "@/components/Button";
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'GENERAL INQUIRY',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: 'GENERAL INQUIRY', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    return (
        <div className="flex-1">
            <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0d1b1c] dark:text-white mb-4">{t('contactForm.title')}</h2>
                <div className="w-20 h-1 bg-accent-gold mb-6"></div>
                <p className="text-gray-600 dark:text-gray-400">{t('contactForm.subtitle')}</p>
            </div>

            {status === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-6 py-4 rounded-xl mb-6 flex items-center gap-3 animate-fade-in">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                    <div>
                        <p className="font-bold">{t('contactForm.successTitle')}</p>
                        <p className="text-sm opacity-80">{t('contactForm.successDesc')}</p>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-6 py-4 rounded-xl mb-6 flex items-center gap-3 animate-fade-in">
                    <span className="material-symbols-outlined text-2xl">error</span>
                    <div>
                        <p className="font-bold">{t('contactForm.errorTitle')}</p>
                        <p className="text-sm opacity-80">{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">{t('contactForm.nameLabel')}</label>
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 dark:bg-[#1a2024] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition-all text-base outline-none dark:text-white" 
                            placeholder={t('contactForm.namePlaceholder')} 
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">{t('contactForm.emailLabel')}</label>
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 dark:bg-[#1a2024] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition-all text-base outline-none dark:text-white" 
                            placeholder={t('contactForm.emailPlaceholder')} 
                            type="email"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">{t('contactForm.subjectLabel')}</label>
                    <div className="relative">
                        <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-[#1a2024] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition-all text-base outline-none appearance-none dark:text-white cursor-pointer"
                        >
                            <option value="GENERAL INQUIRY">{t('contactForm.subjects.general')}</option>
                            <option value="GAU SEVA">{t('contactForm.subjects.gauSeva')}</option>
                            <option value="EDUCATION SUPPORT">{t('contactForm.subjects.edu')}</option>
                            <option value="HEALTH SUPPORT">{t('contactForm.subjects.health')}</option>
                            <option value="DEADDICTION">{t('contactForm.subjects.deaddiction')}</option>
                            <option value="PLANTATION">{t('contactForm.subjects.plantation')}</option>
                            <option value="OTHER">{t('contactForm.subjects.other')}</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none text-gray-500">expand_more</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">{t('contactForm.messageLabel')}</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 dark:bg-[#1a2024] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition-all text-base outline-none resize-none dark:text-white" 
                        placeholder={t('contactForm.messagePlaceholder')} 
                        rows={5}
                    ></textarea>
                </div>
                <Button type="submit" disabled={status === 'loading'} className="w-full md:w-auto min-w-[200px] h-14 text-base disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            {t('contactForm.sending')}
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            {t('contactForm.send')}
                            <span className="material-symbols-outlined text-xl">send</span>
                        </span>
                    )}
                </Button>
            </form>
        </div>
    );
}
