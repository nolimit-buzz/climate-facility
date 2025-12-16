import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  AtSign,
} from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-[#02100d] text-white pt-24 pb-12 border-t border-white/5 relative z-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col items-center lg:items-start lg:col-span-1">
          <a href="#" className="flex items-center mb-8">
            <img
              src="/logo-colored.svg"
              alt="Climate Finance Blending Facility"
              className="h-12 w-auto"
            />
          </a>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 font-sans">About us</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-sans">
            {[
              'Our mission',
              'Our Institutional Framework',
              'History',
              'Leadership and governance',
              'Our Impact',
            ].map((link) => (
              <li
                key={link}
                className="hover:text-brand-accent cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 font-sans">More from the Facility</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-sans">
            {[
              'Centres',
              'Meetings',
              'Stakeholders',
              'Facility stories',
              'Press releases',
              'Picture gallery',
              'Podcasts',
              'Videos',
            ].map((link) => (
              <li
                key={link}
                className="hover:text-brand-accent cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 text-center lg:text-left">
          <div>
            <h4 className="font-bold text-lg mb-6 font-sans">Engage with us</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              {[
                'Sign in',
                'Partner with us',
                'Become a member',
                'Sign up for our press releases',
                'Subscribe to our newsletters',
                'Contact us',
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-brand-accent cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 font-sans">Quick links</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              {['Sustainability at the Facility', 'Careers'].map((link) => (
                <li
                  key={link}
                  className="hover:text-brand-accent cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8">
        <div className="flex gap-6">
          {[
            { name: 'Twitter / X', Icon: Twitter },
            { name: 'LinkedIn', Icon: Linkedin },
            { name: 'YouTube', Icon: Youtube },
          ].map(({ name, Icon }, i) => (
            <button
              key={name}
              type="button"
              aria-label={name}
              className="text-white hover:text-brand-accent cursor-pointer transition-colors"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-sm font-sans">
          <span>Privacy Policy &amp; Terms of Service</span>
          <span className="hidden md:inline">•</span>
          <span>© 2025 Climate Finance Blending Facility</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;


