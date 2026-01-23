'use client'

import { useEffect } from 'react'

export default function GTranslateWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only initialize once globally
    if (window.gtranslateInitialized) return
    
    const configScript = document.createElement('script')
    configScript.innerHTML = `
      window.gtranslateSettings = {
        default_language: "en",
        native_language_names: true,
        detect_browser_language: true,
        url_structure: "none",
        wrapper_selector: ".gtranslate_wrapper",
        languages: [
          "en", "hi", "bn", "te", "mr", 
          "ta", "gu", "kn"
        ]
      };
    `
    document.body.appendChild(configScript)

    const translateScript = document.createElement('script')
    translateScript.src = 'https://cdn.gtranslate.net/widgets/latest/dropdown.js'
    translateScript.defer = true
    translateScript.onload = () => {
      window.gtranslateInitialized = true
      
      // Move widget to appropriate slot after initialization
      setTimeout(() => {
        const widget = document.querySelector('.gtranslate_wrapper')
        const desktopSlot = document.getElementById('desktop-language-slot')
        const mobileSlot = document.getElementById('mobile-language-slot')
        
        if (widget && desktopSlot && mobileSlot) {
          // Clone widget for both slots
          const desktopClone = widget.cloneNode(true)
          const mobileClone = widget.cloneNode(true)
          
          desktopClone.classList.add('desktop-only-widget')
          mobileClone.classList.add('mobile-only-widget')
          
          desktopSlot.appendChild(desktopClone)
          mobileSlot.appendChild(mobileClone)
          
          // Hide original
          widget.style.display = 'none'
          
          // Sync changes between widgets
          const syncWidgets = () => {
            const desktopSelect = desktopClone.querySelector('select')
            const mobileSelect = mobileClone.querySelector('select')
            
            if (desktopSelect && mobileSelect) {
              desktopSelect.addEventListener('change', (e) => {
                mobileSelect.value = e.target.value
                mobileSelect.dispatchEvent(new Event('change'))
              })
              
              mobileSelect.addEventListener('change', (e) => {
                desktopSelect.value = e.target.value
                desktopSelect.dispatchEvent(new Event('change'))
              })
            }
          }
          
          setTimeout(syncWidgets, 500)
        }
      }, 500)
    }
    document.body.appendChild(translateScript)

    return () => {
      // Don't remove scripts on cleanup to prevent re-initialization
    }
  }, [])

  return (
    <div className="gtranslate_wrapper language-selector" style={{ position: 'absolute', left: '-9999px' }}>
      <style>{`
        /* Desktop Widget Styles */
        .desktop-only-widget {
          position: relative !important;
          left: auto !important;
          display: inline-flex !important;
          align-items: center;
          gap: 0.5rem;
        }

        .desktop-only-widget::before {
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ae761' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .desktop-only-widget select {
          background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(12px);
          color: white;
          padding: 0.625rem 1.25rem;
          padding-right: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease-in-out;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23fff' opacity='0.7' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
        }

        .desktop-only-widget select:hover {
          background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
          border-color: rgba(154, 231, 97, 0.6);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.05);
        }

        .desktop-only-widget select:focus {
          outline: none;
          border-color: rgba(154, 231, 97, 0.8);
          box-shadow: 0 0 0 3px rgba(154, 231, 97, 0.2);
        }

        .desktop-only-widget select option {
          background-color: #044441;
          color: white;
          padding: 0.5rem;
        }

        /* Mobile Widget Styles */
        .mobile-only-widget {
          position: relative !important;
          left: auto !important;
          display: inline-flex !important;
          align-items: center;
          gap: 0.375rem;
        }

        .mobile-only-widget::before {
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ae761' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='2' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'%3E%3C/path%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .mobile-only-widget select {
          background: linear-gradient(to bottom right, #9ae761, #a8ed6f);
          color: #044441;
          padding: 0.5rem 0.875rem;
          padding-right: 2rem;
          border: 1px solid #8dd952;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.75rem;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease-in-out;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23044441' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.625rem center;
        }

        .mobile-only-widget select:hover,
        .mobile-only-widget select:active {
          background: linear-gradient(to bottom right, #a8ed6f, #b5f07e);
          transform: scale(0.95);
        }

        .mobile-only-widget select:focus {
          outline: none;
          border-color: #7bc943;
          box-shadow: 0 0 0 3px rgba(154, 231, 97, 0.3);
        }

        .mobile-only-widget select option {
          background-color: white;
          color: #044441;
          padding: 0.5rem;
        }

        /* Hide the default globe icon that gtranslate adds */
        .gtranslate_wrapper img,
        .gtranslate_wrapper > svg,
        .desktop-only-widget img,
        .desktop-only-widget > svg,
        .mobile-only-widget img,
        .mobile-only-widget > svg {
          display: none !important;
        }

        /* Responsive adjustments for desktop */
        @media (min-width: 1280px) {
          .desktop-only-widget select {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .desktop-only-widget select {
            padding-left: 1rem;
            padding-right: 2rem;
            background-position: right 0.75rem center;
          }
        }
      `}</style>
    </div>
  )
}