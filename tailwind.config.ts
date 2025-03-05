import type { Config } from 'tailwindcss';

const rem = (num: number) => ({ [num]: `${num / 16}rem` });
const per = (num: string) => ({ [num]: `${num.slice(0, num.length - 1)}%` });

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        rotateImg: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '30%, 70%': {
            transform: 'translateY(-20px) rotate(20deg)',
          },
          '50%': {
            // added quotes around 50%
            transform: 'translateY(0) rotate(-20deg)',
          },
        },
        'fall-down': {
          '0%': { transform: 'translateY(0) rotate(-45deg)', opacity: '1' },

          '100%': {
            transform: 'translateY(40px) rotate(-45deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        flow: 'flow 0.8s linear infinite',
        explore: 'fall-down 1.3s infinite ease-in-out',
      },

      screens: {
        xxl: '1920px',
        mxl: '1200px',
        L4K: '2560px',
        LM4K: '1916px',
        LL: '1441px',
        LM: '1025px',
        Tab: '770px',
        MXL: '550px',
        ML: '426px',
        MS: '376px',
        MXS: '321px',
      },
      backgroundImage: {
        aboutBusiness:
          'url("https://hp.thepandasolutions.com/websiteAssets/about/Experience.webp")',

        parallax:
          'url("https://hp.thepandasolutions.com/websiteAssets/home/TrustedBy.webp")',
        footer:
          "url('https://hp.thepandasolutions.com/websiteAssets/footer/Footerbg.webp')",
        'custom-gradient-home':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(34, 34, 34, 0.73) 51%, rgb(34, 34, 34) 100%)',
        'custom-gradient-about':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-our_work':
          'linear-gradient(rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.74) 64%, rgba(255, 120, 97, 0.74) 100%)',
        'custom-gradient-blogs':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-blogdetails':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-career':
          ' linear-gradient(rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.74) 64%, rgba(255, 120, 97, 0.74) 100%)',
        'custom-gradient-contact':
          'linear-gradient(111deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.78) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-app-development':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-software-development':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-web-design':
          ' linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-branding':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-digital-marketing':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-dialer':
          'linear-gradient(90deg, rgb(34, 34, 34) 0%, rgba(70, 38, 43, 0.88) 41%, rgba(255, 59, 87, 0.56) 64%, rgba(255, 120, 97, 0.56) 100%)',
        'custom-gradient-contact1':
          'linear-gradient(to bottom, rgb(255,60,87), rgb(255,121,97))',

        'custom-gradient-form':
          'linear-gradient(98deg, #ff3757 0%, #ff7c62 100%);',
        'custom-gradient-homeline':
          'linear-gradient(to right, #ff3c57, #ff7861)',

        'custom-gradient-button':
          'linear-gradient(90deg, #ff3856 0%, #ff5e59 100%)',
        'custom-gradient-button1':
          'linear-gradient(98deg, #ff3757 0%, #ff7c62 100%)',
        '$custom-background-work':
          '    linear-gradient(to right, rgb(255, 255, 255), rgb(171, 186, 171))',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        applesystem: ['apple-system', 'sans-serif'],
        BlickMacSystemFont: ['BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        our_expertices: '#FF7A61',
        para: '#949494',
        primary: '#ff4c58',
        heading: '#343434',
        secondary: '#ffffff',
        customRed: '#ff3b57',
        facebookBlue: '#1877F2',
        instagramPink: '#E1306C',
        twitterBlue: '#1DA1F2',
        linkedinBlue: '#0A66C2',

        customGray: '#949494',
        white65: 'rgba(255,255,255,0.65)',
        grayWhite: '#f5f5f5',

        primary1: 'fff',
        secondary1: '#abbaab',
        customBlack: '#343434',
        lightGray: '#e6e6e6',
        careerHeading: '#0066CC',
        careerTitle: '#f8f9fa',
        careerHeading1: '#666666',
        careerPara: '#333',
        progress: '#717273',
        additional: '#f2f2f2',
      },
      width: {
        ...rem(14),
        ...rem(32),
        ...rem(34),
        ...rem(40),
        ...rem(64),
        ...rem(130),
        ...rem(200),
        ...rem(291),
        ...rem(325),
        ...rem(192),
        ...rem(165),
        ...rem(248),
        ...rem(268),
        ...rem(288),
        ...rem(300),
        ...rem(315),
        ...rem(380),
        ...rem(389),
        ...rem(384),
        ...rem(400),
        ...rem(440),
        ...rem(450),
        ...rem(500),
        ...rem(550),
        ...rem(520),
        ...rem(556),
        ...rem(700),
        ...rem(736),
        ...rem(756),
        ...rem(900),

        ...per('10p'),
        ...per('12p'),
        ...per('30p'),
        ...per('40p'),
        ...per('50p'),
        ...per('53p'),
        ...per('45p'),
        ...per('55p'),
        ...per('60p'),
        ...per('70p'),
        ...per('80p'),
        ...per('99p'),
        ...per('33p'),
        ...per('55p'),
        ...per('65p'),
        ...per('70p'),
        ...per('85p'),
        ...per('95p'),
        ...per('99p'),
        ...per('33p'),
        ...per('35p'),
        ...per('90p'),
        ...per('100p'),
        ...per('82p'),
        ...per('93p'),
        ...per('95p'),
      },
      maxWidth: {
        '500': '500px',
        '550': '550px',
        '850': '850px',
      },
      spacing: {
        '20': '5rem',
        '28': '7rem',
      },
      height: {
        ...rem(1),
        ...rem(3),
        ...rem(30.39),
        ...rem(32),
        ...rem(34),
        ...rem(40),
        ...rem(43),
        ...rem(44),
        ...rem(100),
        ...rem(150),
        ...rem(48),
        ...rem(52),
        ...rem(56),
        ...rem(68),
        ...rem(100),
        ...rem(180),
        ...rem(226),
        ...rem(236),
        ...rem(240),
        ...rem(250),
        ...rem(260),
        ...rem(290),
        ...rem(292),
        ...rem(294),
        ...rem(300),
        ...rem(304),
        ...rem(308),
        ...rem(309),
        ...rem(340),
        ...rem(350),
        ...rem(366),
        ...rem(190),
        ...rem(210),
        ...rem(260),
        ...rem(400),
        ...rem(440),
        ...rem(425),
        ...rem(395),
        ...rem(420),
        ...rem(440),
        ...rem(450),
        ...rem(464),
        ...rem(500),
        ...rem(540),
        ...rem(600),
        ...rem(692),
        ...rem(878),
      },
      fontSize: {
        md: '16px',
        smd: '13px',
        ...rem(10),

        ...rem(12.8),
        ...rem(11.2),

        ...rem(12),
        ...rem(13),
        ...rem(14),
        ...rem(14.4),
        ...rem(14.72),
        ...rem(16),
        ...rem(17),
        ...rem(17.6),
        ...rem(18),
        ...rem(19),
        ...rem(19.2),
        ...rem(20),
        ...rem(20.8),
        ...rem(22),
        ...rem(24),
        ...rem(25),
        ...rem(27),
        ...rem(28),
        ...rem(30),
        ...rem(32),
        ...rem(36),
        ...rem(40),
        ...rem(45),
        ...rem(52),
        ...rem(55),
        ...rem(46),
        ...rem(48),
        ...rem(64),
      },
      lineHeight: {
        ...rem(55),
        ...rem(62),
      },
      borderRadius: {
        '4xl': '2.5rem',
        ...rem(40),
        ...rem(30),
      },

      borderWidth: {
        ...rem(15),
      },
      fontWeight: {
        mid: '500',
        mid1: '600',
        semi: '700',
      },
      margin: {
        'custom-100': '100px',
        'custom-150': '150px',
        'custom-220': '220px',
      },
    },
  },
  plugins: [],
} satisfies Config;
